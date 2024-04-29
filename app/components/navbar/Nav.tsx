"use client";
import React from "react";
import styles from "./nav.module.css";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Check if the current pathname is /admin
  const isAdminRoute = pathname === "/admin";

  return (
    <nav className={`${styles.nav} ${isAdminRoute ? styles.hidden : ""}`}>
      <span className={styles.nav_title}>GRAPHER SHOT.</span>
      {!isAdminRoute && (
        <button
          onClick={() => {
            router.push("/admin");
          }}
          className={styles.admin_btn}
        >
          ADMIN
        </button>
      )}
    </nav>
  );
};

export default Nav;
