import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={style.c_footer}>
      <p>© 2023 Enrique Alfonso . All right reserved.</p>
      <a className={style.footer__email} href="">
        ea888416@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
