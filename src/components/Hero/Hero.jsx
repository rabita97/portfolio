import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Fariha,</h1>
        <h1 className={styles.typewriterDescription}>
          <span className={styles.gradientText}>
            <Typewriter
              words={[
                'A Fullstack Developer',
                'An UI/UX Designer',
                'A Programmer',
                'A DevOps Specialist'
              ]}
              loop={true}
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={2000}
              deleteDelay={2000}
              cursor
              cursorStyle="|"
              cursorClassName={styles.typewriterCursor}
            />
          </span>
        </h1>
        <p className={styles.summary}>
          I'm a third year Computer Science student at Dalhousie University, and I bring a strong blend of technical expertise, teamwork, and leadership skills.
        </p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
        My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="my image"
        className={styles.heroImg}
      />
    </section>
  );
};
