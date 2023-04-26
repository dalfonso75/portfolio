import React, { useEffect } from "react";
import Router from "next/router";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

import Header from "../Header";
import CustomCursor from "../CustomCursor";

import { Work_Sans } from "next/font/google";
import styles from "./AppLayout.module.css";

const font = Work_Sans({ subsets: ["latin"] });

const AppLayout = ({ children }) => {
  const lenis = useLenis();

  useEffect(() => {
    function onHashChangeStart(url) {
      url = "#" + url.split("#").pop();
      lenis.scrollTo(url);
    }

    Router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      Router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [lenis]);

  return (
    <main className={font.className}>
      <CustomCursor />

      <ReactLenis root>
        <Header />
        <main className={styles.c_applayout}>{children}</main>
      </ReactLenis>
    </main>
  );
};

export default AppLayout;
