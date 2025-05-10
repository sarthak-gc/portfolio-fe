import { motion } from "motion/react";
import { useState } from "react";

interface ButtonPropI {
  setIsClicked: (val: boolean) => void;
  text: string;
}
const Button = ({ setIsClicked, text }: ButtonPropI) => {
  const [isHovering, setIsHovering] = useState(false);

  const hoverGradients = [
    "linear-gradient(45deg, #ff5733, #8e44ad)",
    "linear-gradient(45deg, #3498db, #9b59b6)",
    "linear-gradient(45deg, #f39c12, #1abc9c)",
    "linear-gradient(45deg, #e74c3c, #2ecc71)",
    "linear-gradient(45deg, #9b59b6, #f1c40f)",
  ];
  return (
    <div className="sm:col-start-2 col-start-2 col-span-5">
      <motion.button
        onClick={() => setIsClicked(true)}
        className="text-white rounded-full p-3 px-7 text-xl lg:text-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out w-[250px]"
        animate={{
          backgroundImage: isHovering
            ? hoverGradients
            : "linear-gradient(125deg,black,white)",
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        onHoverStart={() => {
          setIsHovering(true);
        }}
        onHoverEnd={() => {
          setIsHovering(false);
        }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.button>
    </div>
  );
};

export default Button;
