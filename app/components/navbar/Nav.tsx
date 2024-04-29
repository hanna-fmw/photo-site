"use client";
import React from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <span className={styles.nav_title}>GRAPHER SHOT.</span>
      <button
        onClick={() => {
          router.push("/admin");
        }}
        className={styles.admin_btn}
      >
        ADMIN
      </button>
    </nav>
  );
};

export default Nav;
