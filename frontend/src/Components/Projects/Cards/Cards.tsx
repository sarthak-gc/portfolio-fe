import { Link } from "react-router-dom";
import type { ProjectProps } from "../../../Pages/Projects";
import { Button } from "@/Components/ui/button";
const Cards = ({ project }: { project: ProjectProps }) => {
  return (
    <Link to={`/project/${project.projectId}`} state={project}>
      <div className=" w-full relative">
        <img
          className="object-cover max-w-[90%]  mx-auto  aspect-square mb-3 rounded-md"
          src={project.thumbnailUrl}
          alt={project.name}
        />
        <div className="px-3">
          <span>{project.name}</span>
          <br />
          <p>{project.description}</p>
          <div className="flex flex-col shrink0">
            <span className="my-2">Tools Used: </span>
            <div className="space-y-2 space-x-2 grid lg:grid-cols-4 grid-cols-3">
              {project.TechUsed.map((tool, index) => (
                <Button className="bg-gray-600" key={index}>
                  {tool}{" "}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
