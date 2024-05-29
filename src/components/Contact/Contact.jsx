import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactSection}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.right}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <a href="mailto:fariha.rabita@dal.ca">Email</a>
            </li>
            <li className={styles.link}>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              <a href="https://www.linkedin.com/in/fariharabita97">LinkedIn</a>
            </li>
            <li className={styles.link}>
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              <a href="https://www.github.com/rabita97">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerText}>
        <p>Created By Fariha Zerin Rabita | © 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};
