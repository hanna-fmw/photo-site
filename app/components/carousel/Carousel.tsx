"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className={styles.swiper}
      autoplay
    >
      {images.map((image, i) => {
        return (
          <>
            <SwiperSlide>
              <div className={styles.carousel_img_container}>
                <Image
                  key={i}
                  src={image}
                  width={200}
                  height={200}
                  alt="Gallery Image"
                  className={styles.carousel_image}
                />
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
