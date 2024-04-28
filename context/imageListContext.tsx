"use client";
// ImageListContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/app/firebase";

type ImageListProviderProps = {
  children: React.ReactNode;
};

type Image = {
  url: string;
};

const ImageListContext = createContext(undefined);

export const ImageListProvider = ({ children }: ImageListProviderProps) => {
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
    // @ts-ignore
    <ImageListContext.Provider value={{ imageList, setImageList }}>
      {" "}
      {children}
    </ImageListContext.Provider>
  );
};

export const useImageList = () => {
  return useContext(ImageListContext);
};
