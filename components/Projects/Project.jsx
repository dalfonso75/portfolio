import React from "react";
import style from "./Projects.module.css";
const Project = ({ data }) => {
  const { name, description, year, srcImage, isExternalLink, href } = data;
  return (
    <li className={style.c_project}>
      <img className={style.project__image} src={srcImage} alt={name} />

      <div className={style.project__info}>
        <h3 className={style.project__title}>{name}</h3>
        <div>
          <p className={style.project__year}>{year}</p>
          <p className={style.project__description}>[ {description} ]</p>
          <button className={style.project__button_view}>View</button>
        </div>
      </div>
    </li>
  );
};

export default Project;
