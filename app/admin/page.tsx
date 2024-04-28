"use client";
import styles from "./admin.module.css";
import { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "@/app/firebase";
import { v4 } from "uuid";

type Image = {
  url: string;
};

const AdminPage = () => {
  //A state to hold info about which image the user has picked
  const [file, setFile] = useState<File | null>(null);

  //Function triggered by Upload button that will upload the image to firebase storage
  const uploadImage = () => {
    if (file == null) return;
    //We create a reference for the file in its location in the storage bucket
    const imageRef = ref(storage, `images/${file.name + v4()}`);
    //We upload the actual image to the imageRef location. We use snapshot in getDownloadURL to get the url, so that we can download (and render) it
    //immediately after uploading it:
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        //@ts-ignore
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  //We keep track of the URL for each of the images in our storage bucket:
  const [imageList, setImageList] = useState<Image[]>([]);

  //We create a reference to all the files inside the images folder and pass it to listAll from firebase inside useEffect to list all images on page load
  const imageListRef = ref(storage, "images/");
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      //console.log(response); logs out "items" for our uploaded files
      //We loop through the items in the response and call getDownloadUrl for each to get the url.
      //We pass in the url in our callback function and add it to our existing imageList state (which is an array of all the urls):
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          //@ts-ignore
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <main className={styles.admin}>
      <input
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
          } else {
            setFile(null);
          }
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      {/* We have set our imageList to an array of items/urls for each image in our storage bucket */}

      {imageList.map((url, i) => {
        return (
          <div key={i}>
            {/* @ts-ignore */}
            <img src={url} className={styles.photo} />
          </div>
        );
      })}
    </main>
  );
};

export default AdminPage;
