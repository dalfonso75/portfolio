import React, { useEffect, useState } from "react";
import { Work_Sans } from "next/font/google";
import Header from "../Header";

const font = Work_Sans({ subsets: ["latin"] });

const AppLayout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => {
    if (darkTheme) {
      document.querySelector("body").classList.remove("light--theme");
      document.querySelector("body").classList.add("dark--theme");
    } else {
      document.querySelector("body").classList.remove("dark--theme");
      document.querySelector("body").classList.add("light--theme");
    }
  }, [darkTheme]);

  return (
    <main data-scroll-container className={font.className}>
      <Header />
      {children}
    </main>
  );
};

export default AppLayout;
