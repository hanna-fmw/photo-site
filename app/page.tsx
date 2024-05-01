"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/carousel/Carousel";
import { useImageList } from "@/context/imageListContext";
//Instead of importing map/Map that is instead of importing the actual Map.tsx, we
//just import the map FOLDER (where we have both our index.ts with the ssr:false code, and
//our Map.tsx file). So by just importing the map folder here, Next will take into
//consideration the index.ts file, and so we will get client-side rendering for
//our Map.tsx component. So we say:
import Map from "@/app/components/map";
//...instead of this:
//import Map from "@/app/components/map/Map";

export default function Home() {
  //@ts-ignore
  const { imageList } = useImageList();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/hero.png"
          width={400}
          height={400}
          alt="Hero Image"
          className={styles.hero_image}
        />
        <aside className={styles.hero_left}>
          <h1 className={styles.hero_heading}>
            <span className={styles.line_1}>PHOTO</span> <br />{" "}
            <span className={styles.line_2}>GRAPHY</span>
          </h1>
        </aside>
        <aside className={styles.hero_right}>
          <p className={styles.hero_text_container}>
            Lorem ipsum dolor <br /> consectetur elit <br /> sit amit vitae,{" "}
            <br /> neq fugiat.
          </p>
        </aside>
        <button className={styles.order_btn}>Order Now</button>
      </section>

      <section className={styles.about_container}>
        <article className={styles.about_top}>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque
            voluptatum excepturi debitis quibusdam fugiat. Placeat dolor odio
            dignissimos ea minus aspernatur vitae quos aut obcaecati ipsum?
            Reiciendis, magni quas. Nemo a veritatis nisi, fugit atque
            inventore. Totam amet commodi itaque consequatur sit, quae
            blanditiis voluptatibus fugit doloremque natus ipsam rerum? Adipisci
            ex nemo delectus amet quisquam quaerat dolore illum.
          </p>
        </article>
        <article className={styles.about_bottom}>
          <div className={styles.facts_card}>
            <h1>+10 Years</h1>
            <p>Experience</p>
          </div>
          <div className={styles.facts_card}>
            <h1>+450</h1>
            <p>Customers</p>
          </div>
          <div className={styles.facts_card}>
            <h1>+10 Years</h1>
            <p>Photos</p>
          </div>
        </article>
      </section>
      <section className={styles.carousel_img_container}>
        <Carousel />
      </section>
      <section className={styles.portfolio_section}>
        <h1 className={styles.portfolio_h1}>Portfolio Photos</h1>
        <p className={styles.portfolio_p}>Sample portfolio photos</p>
        <div className={styles.image_gallery}>
          {imageList.map((url: string, i: number) => {
            return (
              <div key={i}>
                <Image
                  src={url}
                  className={styles.photo}
                  width={100}
                  height={100}
                  alt="Portfolio image"
                />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h1 className={styles.h1}>Studio in Stockholm, zoom in...</h1>
        <Map />
      </section>
    </main>
  );
}
