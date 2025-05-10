import { motion } from "motion/react";

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeIn", delay: 1 },
  },
};
const ProjectHeading = () => {
  return (
    <motion.h1
      whileInView="show"
      variants={titleVariants}
      initial="hidden"
      animate="show"
      className="text-white text-center w-auto whitespace-nowrap text-[4vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2.2vw] selection:text-black selection:bg-white"
    >
      Here are some of the projects I have worked on
    </motion.h1>
  );
};

export default ProjectHeading;
