import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import Links from "@/Components/Projects/Project/Links";
import Thumbnail from "@/Components/Projects/Project/Thumbnail";
import ProjectName from "@/Components/Projects/Project/Name";
import Description from "@/Components/Projects/Project/Description";
import Tools from "@/Components/Projects/Project/Tools";
import { useLocation, useParams } from "react-router-dom";
import type { ProjectProps } from "./Projects";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const location = useLocation();
  const state = location.state || null;
  const projectId = useParams().projectId;

  const [project, setProject] = useState<ProjectProps | null>(state);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!state) {
      setLoading(true);
      fetch(
        `https://for-cname.justfordiscord456.workers.dev/project/detail/${projectId}`
      )
        .then((response) => response.json())
        .then((data) => {
          setProject(data.data);
        })
        .catch((err) => {
          setError("Failed to load project data.");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [state, projectId]);

  if (loading) {
    return <div className="text-white">Loading project details...</div>;
  }

  if (error) {
    return (
      <div className="text-white">
        Inaccessible from url, click project to view details
      </div>
    );
  }

  if (!project) {
    return <div className="text-white">Project not found.</div>;
  }

  const {
    name,
    description,
    thumbnailUrl,
    imagesUrl,
    githubLink,
    demoLink,
    TechUsed,
  } = project;
  const imagesLength = imagesUrl.length;
  return (
    <div className={`bg-black p-8 text-white  `}>
      <div className="flex flex-col items-center justify-center mb-8  relative">
        <Thumbnail projectName={name} thumbnailUrl={thumbnailUrl} />
        <ProjectName name={name} />
      </div>

      <Description desc={description} />

      <Links githubLink={githubLink} demoLink={demoLink} />

      <Tools TechUsed={TechUsed} />

      <div className="flex items-center flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4 text-start w-full z-1">
          Screenshots
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4 mb-20  flex items-center"
        >
          <CarouselContent className="w-full">
            {imagesUrl.map((imageUrl, index) => (
              <CarouselItem
                key={index}
                className={`${
                  imagesLength < 3 ? "md:basis-1/2 w-[35%]" : "md:basis-1/3"
                }`}
              >
                <motion.a
                  target="_blank"
                  href={imageUrl}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <img src={imageUrl} alt={`screenshot ${index + 1}`} />
                </motion.a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectDetail;
