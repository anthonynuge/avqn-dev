"use client";
import React from "react";
import styles from "./projects.module.css";
import { projects } from "@data/projectsData";
import ProjectCard from "@app/components/ProjectCard/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.content}> */}
      <h1 className={styles.header}>Projects</h1>
      {/* nav bar */}
      <nav className={styles.projectfilters}>
        <button>All</button>
        <button>Projects</button>
        <button>Experiance</button>
        <button>Other</button>
      </nav>
      {/* main content of cards */}
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            gif={project.gif}
            link={project.link}
            git={project.git}
            tags={project.tags}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProjectsPage;
