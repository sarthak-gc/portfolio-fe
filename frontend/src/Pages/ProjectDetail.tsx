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
import { useLocation } from "react-router-dom";
import type { ProjectProps } from "./Projects";

const ProjectDetail = () => {
  const location = useLocation();
  const state = location.state || null;

  if (!state) {
    return <>Inaccessible from url, click project to view details</>;
  }

  const project: ProjectProps = state;
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
                <motion.img
                  src={imageUrl}
                  alt={`screenshot ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
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
