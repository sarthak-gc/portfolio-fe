import { useState } from "react";
import { motion } from "motion/react";

export const Footer = ({
  step,
  sent,
  handleNext,
  setIsClicked,
  setStep,
  setSent,
}: {
  step: number;
  sent: boolean;
  handleNext: () => void;
  setIsClicked: (val: boolean) => void;
  setStep: (val: number) => void;
  setSent: (val: boolean) => void;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const hoverGradients = [
    "linear-gradient(45deg, #ff5733, #8e44ad)",
    "linear-gradient(45deg, #3498db, #9b59b6)",
    "linear-gradient(45deg, #f39c12, #1abc9c)",
    "linear-gradient(45deg, #e74c3c, #2ecc71)",
    "linear-gradient(45deg, #9b59b6, #f1c40f)",
  ];

  const handleButtonClick = () => {
    if (sent) {
      setIsClicked(false);
      setStep(1);
      setSent(false);
    } else {
      handleNext();
    }
  };

  return (
    step <= 4 &&
    step != 3 && (
      <motion.button
        disabled={step > 4}
        className="text-white rounded-full p-3 px-7 text-xl lg:text-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out w-[250px] mt-10 outline-none"
        animate={{
          backgroundImage: isHovering
            ? hoverGradients
            : ["linear-gradient(125deg, black, white)"],
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
        onClick={handleButtonClick}
      >
        {!sent ? "Next" : "Close"}
      </motion.button>
    )
  );
};
