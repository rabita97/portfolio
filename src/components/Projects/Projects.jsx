/* Projects.js */
import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({ project }) => (
  <div className={styles.card}>
    <img
      src={getImageUrl(project.imageSrc)}
      alt={`Image of ${project.title}`}
      className={styles.image}
    />
    <div className={styles.content}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
    </div>
  </div>
);

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    import("../../data/projects.json")
      .then((module) => {
        setProjects(module.default);
      })
      .catch((err) => {
        console.error("Error loading projects.json:", err);
      });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div id="projects" className={styles.container}>
      <div id="projects" className={styles.title}>
        <span className={styles.highlight}>Projects </span>&nbsp;<span className={styles.rest}> I have worked on.</span>
      </div>
      <div className={styles.controls}>
        <button className={styles.control} onClick={handlePrev}>{"<"}</button>
        <button className={styles.control} onClick={handleNext}>{">"}</button>
      </div>
      <div
        className={styles.carousel}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
