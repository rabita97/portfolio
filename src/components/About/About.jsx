import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.container} id="about">
      <div className={styles.title}>
        <span className={styles.highlight}>The highlights</span>&nbsp;<span className={styles.rest}>of my professional growth.</span>
      </div>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.aboutItem} data-aos="fade-up">
            <div className={styles.front}>
              <img src={getImageUrl("history/ubisoft.png")} alt="Ubisoft Logo" className={styles.logo} />
              <h3>Junior Programmer</h3>
              <h3>Ubisoft</h3>
            </div>
            <div className={styles.back}>
              <em>Jan 2024 - April 2024</em>
              <br />
              <p>
                During my second co-op at Ubisoft, I developed an internal database tool with MongoDB and Budibase. I built and presented a prototype for an unreleased game using Unity and C#, engaging in comprehensive UI/UX design.
              </p>
            </div>
          </div>
          <div className={styles.aboutItem} data-aos="fade-up" data-aos-delay="200">
            <div className={styles.front}>
              <img src={getImageUrl("history/munichre.png")} alt="Munich Re Logo" className={styles.logo} />
              <h3>DevOps Intern</h3>
              <h3>Munich RE</h3>
            </div>
            <div className={styles.back}>
              <em>May 2023 - Aug 2023</em>
              <br />
              <p>
                During my first co-op at Munich Re, I contributed to the IFRS17 project by documenting system requirements and the CI/CD pipeline. I led the VAPT RFI creation for the CIRCA project and facilitated service description documentation.
              </p>
            </div>
          </div>
          <div className={styles.aboutItem} data-aos="fade-up" data-aos-delay="400">
            <div className={styles.front}>
              <img src={getImageUrl("history/dal.png")} alt="Dalhousie Logo" className={styles.logo} />
              <h3>Head Teaching Assistant</h3>
              <h3>Dalhousie University</h3>
            </div>
            <div className={styles.back}>
              <em>Jan 2023 - Present</em>
              <br />
              <p>
                At Dalhousie University, as Head Teaching Assistant, I led a team of 20+ TAs, coordinated weekly meetings, and assisted in lab sessions for over 150 students covering various topics such as C programming, assembly language, and web development technologies.
              </p>
            </div>
          </div>
          <div className={styles.aboutItem} data-aos="fade-up" data-aos-delay="600">
            <div className={styles.front}>
              <img src={getImageUrl("history/prime.png")} alt="Prime Student Logo" className={styles.logo} />
              <h3>Digital Brand Ambassador</h3>
              <h3>Prime Student</h3>
            </div>
            <div className={styles.back}>
              <em>Jan 2023 - April 2024</em>
              <br />
              <p>
                As a Digital Brand Ambassador for Amazon Prime Student, I managed brand activations and created social media content to promote Prime Student. I also developed outreach plans and coordinated with partners.
              </p>
            </div>
          </div>
          <div className={styles.aboutItem} data-aos="fade-up" data-aos-delay="800">
            <div className={styles.front}>
              <img src={getImageUrl("history/gazette.png")} alt="Dalhousie Gazette Logo" className={styles.logo} />
              <h3>Director of Marketing & Growth</h3>
              <h3>The Dalhousie Gazette</h3>
            </div>
            <div className={styles.back}>
              <em>Sept 2023 - April 2024</em>
              <br />
              <p>
                As Director of Marketing & Growth at The Dalhousie Gazette, I curated our social media presence. Collaborated with the Director of Finance and the Editor-in-Chief to develop innovative strategies, significantly boosting engagement with contributors, readers, and advertisers.
              </p>
            </div>
          </div>
          <div className={styles.aboutItem} data-aos="fade-up" data-aos-delay="1000">
            <div className={styles.front}>
              <img src={getImageUrl("history/wits.png")} alt="WiTS Logo" className={styles.logo} />
              <h3>Secretary</h3>
              <h3>Women in Tech Society</h3>
            </div>
            <div className={styles.back}>
              <em>Sept 2023 - April 2024</em>
              <br />
              <p>
                As Secretary of the Women in Tech Society, I managed meetings and organized events. Co-organized the successful "We Talk Tech" event, drawing over 200 attendees and enhancing our society's visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
