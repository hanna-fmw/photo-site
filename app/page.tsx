"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/carousel/Carousel";
import { useImageList } from "@/context/imageListContext";
import Map from "@/app/components/map";
import WhyMeCard from "./components/whyMeCard/WhyMeCard";
import competencies from "@/data/competencies.json";

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
        <button
          className={styles.order_btn}
          onClick={() => alert("Get in touch on xxx.yyy@zzz.com!")}
        >
          Order Now
        </button>
      </section>

      <section className={styles.about_container}>
        <article className={styles.about_top}>
          <h1 className={styles.section_h1}>ABOUT ME</h1>
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
        <h1 className={styles.section_h1}>PORTFOLIO PHOTOS</h1>
        <p className={styles.section_p}>Sample portfolio photos</p>
        <p className={styles.callout}>
          Click <span className={styles.callout_span}>Admin button</span> in
          navbar to upload more.
        </p>
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
      <section className={styles.why_me_section}>
        <h1 className={styles.section_h1}>WHY ME</h1>
        <article className={styles.card_container}>
          {competencies.map((competency, i) => {
            return (
              <div key={i}>
                <WhyMeCard
                  heading={competency.heading}
                  text={competency.text}
                />
              </div>
            );
          })}
        </article>
      </section>
      <section className={styles.map_section}>
        <h1 className={styles.section_h1}>ADDRESS</h1>
        <p className={styles.section_p}>Studio in Stockholm, zoom in...</p>
        <Map />
      </section>
    </main>
  );
}
