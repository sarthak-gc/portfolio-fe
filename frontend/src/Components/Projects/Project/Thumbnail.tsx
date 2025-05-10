import { motion } from "motion/react";
const Thumbnail = ({
  thumbnailUrl,
  projectName,
}: {
  thumbnailUrl: string;
  projectName: string;
}) => {
  return (
    <motion.img
      className="rounded-lg  mb-4 md:mb-12   md:max-h-[50%] object-cover"
      src={thumbnailUrl}
      alt={`${projectName} thumbnail`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default Thumbnail;
