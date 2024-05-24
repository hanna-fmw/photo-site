"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/app/firebase";

type ImageListProviderProps = {
  children: React.ReactNode;
};

type ImageListContextType = {
  imageList: string[];
  setImageList: React.Dispatch<React.SetStateAction<string[]>>;
  refreshImageList: () => void;
};

const ImageListContext = createContext<ImageListContextType | undefined>(
  undefined,
);

export const ImageListProvider = ({ children }: ImageListProviderProps) => {
  const [imageList, setImageList] = useState<string[]>([]);
  const imageListRef = ref(storage, "images/");

  const refreshImageList = () => {
    listAll(imageListRef).then((response) => {
      const urls = response.items.map((item) =>
        getDownloadURL(item).then((url) => url),
      );
      Promise.all(urls).then((urls) => {
        setImageList(urls);
      });
    });
  };

  useEffect(() => {
    refreshImageList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ImageListContext.Provider
      value={{ imageList, setImageList, refreshImageList }}
    >
      {" "}
      {children}
    </ImageListContext.Provider>
  );
};

export const useImageList = () => {
  const context = useContext(ImageListContext);
  if (context === undefined) {
    throw new Error("useImageList must be used within an ImageListProvider");
  }
  return context;
};
