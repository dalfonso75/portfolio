import React from "react";
import Project from "./Project";
import styles from "./Projects.module.css";
import { PROJECTS } from "./data";
function Projects() {
  return (
    <section className={styles.c_projects} id="Work">
      <div className={styles.projects__text}>
        <h2 className={styles.projects__title}>Ultimos projectos</h2>
        <p className={styles.projects__about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          veritatis tenetur recusandae numquam incidunt magni.
        </p>
      </div>
      <ul className={styles.projects__items}>
        {PROJECTS.map((project) => (
          <Project data={project} key={project.name} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
