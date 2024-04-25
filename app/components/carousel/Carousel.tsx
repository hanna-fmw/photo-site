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
    <section className={styles.carousel_container}>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          //   pagination={{
          //     type: "fraction",
          //   }}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
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
      </div>
    </section>
  );
};

export default Carousel;
