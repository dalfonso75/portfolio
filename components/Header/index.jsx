import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

const menuItems = [
  "About",
  "Experience",
  "Work",
  "Education",
  "Skills",
  "Contact",
];

const Header = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  return (
    <nav className={styles.c_header}>
      <ul className={styles.header__links}>
        {menuItems.map((item) => (
          <li
            key={item}
            className={styles.header__link}
            onMouseEnter={() => setSelectedMenuItem(item)}
          >
            {item === selectedMenuItem && (
              <motion.div
                className={styles.header__underline}
                layoutId="underline"
                transition={{
                  type: "spring",
                  bounce: 0.1,
                  duration: 0.5,
                }}
              />
            )}
            <motion.span
              animate={{
                color: item === selectedMenuItem ? "#fff" : "#8c8c8c",
              }}
              transition={{
                duration: 0.35,
                ease: [0.34, 0.31, 0.23, 0.96],
                delay: 0.1,
              }}
            >
              {item}
            </motion.span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
