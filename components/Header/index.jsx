import React from "react";
// import { Link } from "@studio-freight/compono";
import Link from "next/link";
import { motion } from "framer-motion";
import useActiveSection from "./hook/useActiveSection";

import styles from "./Header.module.css";
import { menuItems } from "./constants/menuItems";

const Header = () => {
  const activeSectionId = useActiveSection();
  return (
    <nav className={styles.c_header}>
      <ul className={styles.header__links}>
        {menuItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className={styles.header__link}
          >
            {item.toLowerCase() === activeSectionId && (
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
                color:
                  item.toLowerCase() === activeSectionId ? "#fff" : "#8c8c8c",
              }}
              transition={{
                duration: 0.35,
                ease: [0.34, 0.31, 0.23, 0.96],
                delay: 0.1,
              }}
            >
              {item}
            </motion.span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
