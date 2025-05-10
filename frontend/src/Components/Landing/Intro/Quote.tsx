import { motion } from "motion/react";

interface QuotePropI {
  scrolled: boolean;
}
const Quote = ({ scrolled }: QuotePropI) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div className="row-start-12 col-start-2 col-end-7 row-end-14 flex flex-col justify-between">
      <motion.span
        variants={textVariants}
        className="text-[4.5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[max(1.8vw,1.8rem)]"
        initial="hidden"
        animate={scrolled ? "show" : "hidden"}
      >
        A journey of a thousand miles begins with a single step
      </motion.span>
    </motion.div>
  );
};

export default Quote;
