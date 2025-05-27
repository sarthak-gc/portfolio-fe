import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  useTransition,
  animated,
  useSpringRef,
  SpringValue,
} from "@react-spring/web";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "../styles.module.css";
import Cards from "../Components/Projects/Cards/Cards";
import ProjectHeading from "@/Components/Projects/ProjectHeading";
import { useScrollStore } from "../Store/Refs/useRefToScroll";
import useProjects from "@/hooks/useProjects";

export interface PagePropI {
  style: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
  projects: ProjectProps[];
  index: number;
}
export interface ProjectProps {
  projectId: string;
  imagesUrl: string[];
  name: string;
  description: string;
  thumbnailUrl: string;
  TechUsed: string[];
  githubLink: string;
  demoLink: string;
}

const Projects = () => {
  const projectRef = useScrollStore().sectionRefs.project;
  const [index, set] = useState(0);
  const [clickedArea, setClickedArea] = useState("");

  const { projects, loading, error } = useProjects();

  const onRightClick = () => {
    setClickedArea("Right");
    set((state) => (state + 1) % projects.length);
  };
  const onLeftClick = () => {
    setClickedArea("Left");
    set((state) => (state - 1 + projects.length) % projects.length);
  };

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,

    from: {
      opacity: 0,
      transform:
        clickedArea == "Left"
          ? "translate3d(-100%, 0%, 0)"
          : "translate3d(-100%,-100%,0)",
    },
    enter: { opacity: 1, transform: "translate3d(-50%, -50%, 0)" },
    leave: {
      opacity: 0,
      transform:
        clickedArea == "Left"
          ? "translate3d(-100%,-100%,0)"
          : "translate3d(-100%,100%,0)",
    },
    config: {
      tension: 100,
    },
  });

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  if (loading || error) {
    return <div className="bg-black w-full h-full"></div>;
  }
  return (
    <motion.div
      ref={projectRef}
      className="bg-black relative w-full h-full  overflow-hidden"
    >
      <ProjectHeading />
      <div
        className={`w-5/6 md:w-3/5 flex  aspect-w-1 aspect-h-1 fill ${styles.container} text-white font-bold select-none `}
      >
        {transitions((style) => {
          return <Page style={style} projects={projects} index={index} />;
        })}
      </div>

      <NavigationButton onClick={onLeftClick} position="left" />
      <NavigationButton onClick={onRightClick} position="right" />
    </motion.div>
  );
};

export default Projects;

const Page = ({ style, projects, index }: PagePropI) => (
  <animated.div
    onClick={(e: MouseEvent) => e.stopPropagation()}
    className="cursor-pointer w-[min(70%,450px)] bg-gray-800 py-4 rounded-md"
    style={{
      ...style,
    }}
  >
    {projects[index] && <Cards project={projects[index]} />}
  </animated.div>
);

const NavigationButton = ({
  onClick,
  position,
}: {
  onClick: () => void;
  position: "left" | "right";
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center border border-gray-400 absolute text-white bottom-[8%] font-semibold w-16 h-16 rounded-full transform -translate-y-1/2 ${
      position === "left"
        ? "lg:left-[10%] left-[15%]"
        : "lg:right-[10%] right-[15%]"
    } lg:top-1/2 md:cursor-none hover:scale-110 cursor-pointer`}
  >
    {position === "left" ? <ArrowLeft /> : <ArrowRight />}
  </button>
);
