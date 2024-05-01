import React from "react";
import styles from "./whyMeCard.module.css";

type Props = {
  heading: string;
  text: string;
};

const WhyMeCard = ({ heading, text }: Props) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.card_heading}>{heading}</h3>
      <p className={styles.card_text}>{text}</p>
    </article>
  );
};

export default WhyMeCard;
