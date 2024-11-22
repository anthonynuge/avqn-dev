import React from "react";
import styles from "./projects.module.css";

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>Projects</h1>
        {/* nav bar */}
        <div className="">
          <nav className={styles.projectfilters}>
            <button>All</button>
            <button>Projects</button>
            <button>Experiance</button>
            <button>Other</button>
          </nav>
        </div>
        {/* main content of cards */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>Placeholder</div>
          <div className={styles.card}>Placeholder</div>
          <div className={styles.card}>Placeholder</div>
          <div className={styles.card}>Placeholder</div>
          <div className={styles.card}>Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
