import Image from "next/image";
import React from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gif: string;
  link: string;
  git: string;
  tags: string[];
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  gif,
  link,
  git,
  tags,
  reverse,
}) => {
  return (
    <div className={`${styles.projectCard} ${reverse ? styles.reverse : ""}`}>
      <div
        className={styles.cardCover}
        style={{ backgroundImage: `url(${gif})` }}
      ></div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
        <div className={styles.tagContainter}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* <div className="background" style={{ backgroundImage: `url(${gif})` }}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>Link</a>
        </div>
      </div> */}
      {/* <Image className="img" src={image} alt={title} /> */}
    </div>
  );
};

export default ProjectCard;
