import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.c_about}>
      <div className={styles.about__titles}>
        <h1 className={styles.about__role}>Web Developer</h1>
        <p className={styles.about__specialized}>
          specialized in Front End with React js, Next.js
        </p>
      </div>
      <div className={styles.about__me}>
        <p className={styles.about__me_text}>
          Desarrollador Front End con 4 años de experiencia en el desarrollo de
          aplicaciones web y sistemas. He trabajado con una amplia gama de
          tecnologías, incluyendo React js, Next.js, Node js y Python. Mi
          experiencia en ingeniería de automatización me ha permitido tener una
          sólida comprensión de los principios de programación y me ha permitido
          resolver problemas complejos de manera eficiente.
        </p>
        <div className={styles.about__social_media}>
          <a
            className={styles.social_media__link}
            href="https://github.com/dalfonso75"
          >
            GitHub
          </a>
          <a
            className={styles.social_media__link}
            href="https://www.linkedin.com/in/deiver-alfonso/"
          >
            Linkedin
          </a>
          <a className={styles.social_media__link} href="https://github.com/dalfonso75">
            Mi Curricum Vitae
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
