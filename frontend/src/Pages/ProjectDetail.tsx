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

const ProjectDetail = () => {
  const project = {
    name: "FB-Clone",
    description:
      "A Facebook clone built with similar functionality but no social network features.",
    thumbnailUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._MQ6SWfTpvkdgFaCa1u6lgHaHa%26cb%3Diwp1%26pid%3DApi&f=1&ipt=3d8426dcef1e011576654e366fae31dd920886be27b9491b38dc813180a708cc&ipo=images",
    imagesUrl: [
      "https://placehold.co/500x300",
      "https://placehold.co/500x300",
      "https://placehold.co/500x300",
      "https://placehold.co/500x300",
      "https://placehold.co/500x300",
      "https://placehold.co/500x300",
      "https://placehold.co/500x300",
      "https://placehold.co/500x300",
    ],
    githubLink: "https://github.com/yourusername/fb-clone",
    demoLink: "https://fb-clone-demo.com",
    TechUsed: ["React", "Node.js", "MongoDB"],
    background: "lightblue",
  };
  const {
    name,
    description,
    thumbnailUrl,
    imagesUrl,
    githubLink,
    demoLink,
    TechUsed,
  } = project;

  return (
    <div className={`bg-black p-8 text-white  `}>
      <div className="flex flex-col items-center justify-center mb-8  relative">
        <Thumbnail projectName={name} thumbnailUrl={thumbnailUrl} />
        <ProjectName name={name} />
      </div>

      <Description desc={description} />

      <Links githubLink={githubLink} demoLink={demoLink} />

      <Tools TechUsed={TechUsed} />

      <div className="flex items-center flex-col">
        <h2 className="text-2xl font-bold mb-4 text-start w-full">
          Screenshots
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4 mb-20 h-[30vh] flex items-center"
        >
          <CarouselContent>
            {imagesUrl.map((imageUrl, index) => (
              <CarouselItem key={index} className="basis-1/3 ">
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
