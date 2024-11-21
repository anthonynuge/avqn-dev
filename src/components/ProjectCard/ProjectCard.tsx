import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="project-card">
      <Image className="img" src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Link</a>
      </div>
    </div>
  );
};

export default ProjectCard;
