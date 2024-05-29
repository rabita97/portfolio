import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.title}>
        <span className={styles.highlight}>Skills </span>&nbsp;<span className={styles.rest}>I have.</span>
      </div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skillCard}>
            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.skillImage} />
            <p className={styles.skillTitle}>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
