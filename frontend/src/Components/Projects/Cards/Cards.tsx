import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { ProjectProps } from "../../../Pages/Projects";
const Cards = ({ project }: { project: ProjectProps }) => {
  return (
    <Link to={`/project/${project.projectId}`} state={project}>
      <motion.div className=" w-full relative">
        <img
          className="object-cover w-full aspect-square"
          src={project.thumbnailUrl}
          alt={project.name}
        />
        <span>{project.name}</span>
        <br />
        <p>{project.description}</p>
        <div className="flex gap-4">
          <span>Tools Used: </span>
          <div className="flex gap-2">
            {project.TechUsed.map((tool, index) => (
              <button key={index}>{tool} </button>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Cards;
