import React from "react";
import Header from "../Header";
import CustomCursor from "../CustomCursor";

import { Work_Sans } from "next/font/google";
import styles from "./AppLayout.module.css";

const font = Work_Sans({ subsets: ["latin"] });

const AppLayout = ({ children }) => {
  return (
    <main className={font.className}>
      <CustomCursor />
      <Header />
      <main className={styles.c_applayout}>{children}</main>
    </main>
  );
};

export default AppLayout;
