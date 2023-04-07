import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.c_header}>
      <Image src="/next.svg" width={120} height={70} />
      <ul className={styles.header__links}>
        <li className={styles.header__link}>Home</li>
        <li className={styles.header__link}>Work</li>
        <li className={styles.header__link}>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
