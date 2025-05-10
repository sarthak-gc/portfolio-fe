import { motion } from "motion/react";
const ProjectName = ({ name }: { name: string }) => {
  return (
    <div className="text-center md:text-left md:ml-8">
      <motion.h1
        className="text-4xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {name}
      </motion.h1>
    </div>
  );
};

export default ProjectName;
