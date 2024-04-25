"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  //We grab the position of the cursor and store it in the state. And by
  //default we put an object with the x and y values
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  console.log(mousePosition);
  //and how do we update the value of the mouse position, ie the x and the y? For that
  //we can use useEffect! And we run it when the page loads (i.e. empty dependency array):

  //   useEffect(() => {
  //     const mouseMove = (e: any) => {
  //       //This will console log the x and y values as the mouse moves. And from
  //       //this MouseEvent in the console we want to grab the clientX and clientY values
  //       console.log(e);
  //       //... so to do this we set the mouse position to the clientX and clientY:
  //       setMousePosition({
  //         x: e.clientX,
  //         y: e.clientY,
  //       });
  //       //So now we get the clientX and clientY values whenever we move the mouse. The
  //       //next step is to set the position of our div circle to these same
  //       //x and y values (ie give it the same position as the mouse´s position). We
  //       //can do this with framer-motion if we want to, or without.
  //     };

  //     //we listen for mousemove, and when that happens we run the mouseMove function
  //     window.addEventListener("mousemove", mouseMove);

  //     //In the return we specify what happens when the component unmounts, in our
  //     //case we remove the event listener and also the mouseMove function:
  //     return () => {
  //       window.removeEventListener("mousemove", mouseMove);
  //     };
  //   }, []);

  //  utan framer motion och med separata states för x och y så kan du göra så här:
  const [mousePositionX, setMousePositionX] = useState(0);
  const [mousePositionY, setMousePositionY] = useState(0);
  useEffect(() => {
    const mouseMove = (e: any) => {
      console.log(e);
      setMousePositionX(e.clientX);
      setMousePositionY(e.clientY);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  //och sedan i jsx:en:

  //   const variants = {
  //     default: {
  //       x: mousePosition.x,
  //       y: mousePosition.y,
  //     },
  //   };

  return (
    <>
      {/* <motion.div
        className={styles.cursor}
        variants={variants}
        animate="default"
      ></motion.div> */}

      <main className={styles.main}>
        <div
          style={{
            transform: `translateX(${mousePositionX - 16}px) translateY(${mousePositionY - 16}px)`,
          }}
          className={styles.cursor}
        ></div>

        <section className={styles.hero}>
          <Image
            src="/hero.png"
            width={500}
            height={500}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cumque officia vitae aspernatur voluptatum hic
              provident! Minus cum excepturi maiores laborum saepe. Neque
              facere, obcaecati omnis sed quia doloremque repellat!
            </p>
          </aside>
          <button className={styles.order_btn}>Order Now</button>
        </section>

        <section className={styles.about_container}>
          <article className={styles.about_top}>
            <h1>ABOUT US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              neque voluptatum excepturi debitis quibusdam fugiat. Placeat dolor
              odio dignissimos ea minus aspernatur vitae quos aut obcaecati
              ipsum? Reiciendis, magni quas. Nemo a veritatis nisi, fugit atque
              inventore. Totam amet commodi itaque consequatur sit, quae
              blanditiis voluptatibus fugit doloremque natus ipsam rerum?
              Adipisci ex nemo delectus amet quisquam quaerat dolore illum.
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
              <p>Portfolio Photos</p>
            </div>
          </article>
        </section>
        <section className={styles.carousel_container}>
          <Image
            src="/carousel_mock.png"
            alt="Photo Carousel"
            width={300}
            height={300}
            className={styles.carousel}
          />
          <aside className={styles.arrows}>
            <i>&lt;&lt;</i>
            <i>&gt;&gt;</i>
          </aside>
        </section>
      </main>
    </>
  );
}
