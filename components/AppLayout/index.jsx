import React, { useRef } from "react";

import Header from "../Header";

import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";
import CustomCursor from "../CustomCursor";

import { Work_Sans } from "next/font/google";
import styles from "./AppLayout.module.css";

const font = Work_Sans({ subsets: ["latin"] });

const AppLayout = ({ children }) => {
  const scrollRef = useRef(null);

  useLocomotiveScroll({
    ref: scrollRef,
    smooth: true,
    smoothMobile: true,
  });

  return (
    <main>
      <CustomCursor />
      <div
        data-scroll-container
        ref={scrollRef}
        className={`${font.className} ${styles.c_applayout}`}
      >
        <Header />
        {children}
      </div>
    </main>
  );
};

export default AppLayout;
