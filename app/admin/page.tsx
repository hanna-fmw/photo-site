"use client";
import styles from "./admin.module.css";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebase";
import { v4 } from "uuid";
import Link from "next/link";
import { useImageList } from "@/context/imageListContext";

const AdminPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const { imageList, refreshImageList } = useImageList();

  const uploadImage = () => {
    if (file == null) return;

    const imageRef = ref(storage, `images/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(() => {
        refreshImageList();
      });
    });
  };

  return (
    <main className={styles.admin}>
      <section className={styles.admin_header}>
        <div className={styles.btn_container}>
          <Link href="/" className={styles.back_link}>
            Back
          </Link>
        </div>
        <h2>Upload photos to Firebase</h2>
        <p>
          Upload portfolio photos to Firebase Storage. These photos will
          automatically display in the Portfolio section on the landing page
        </p>
        <section className={styles.btn_container}>
          <input
            className={styles.btn}
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
              } else {
                setFile(null);
              }
            }}
          />
          <button onClick={uploadImage} className={styles.btn}>
            Upload File
          </button>
        </section>

        <h2>Currently uploaded photos</h2>
        <p>
          These are the photos that are currently stored in Firebase Storage.{" "}
        </p>
      </section>
      <section className={styles.imageList}>
        {imageList.map((url: string, i: number) => {
          return (
            <div key={i}>
              <Image
                src={url as unknown as string}
                className={styles.photo}
                width={100}
                height={100}
                alt="Portfolio image"
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default AdminPage;
