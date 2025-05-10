import type { FormDataI } from "@/Pages/Form";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";

interface FormPage3Props {
  formData: { name: string; email: string; message: string; interest: string };
  setFormData: React.Dispatch<React.SetStateAction<FormDataI>>;
  isValid: { message: boolean };
  setSent: (val: boolean) => void;
  setStep: (val: number) => void;
  setSending: (val: boolean) => void;
  step: number;
}

export const FormPage3 = ({
  formData,
  setFormData,
  step,
  isValid,
  setSent,
  setStep,
  setSending,
}: FormPage3Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [localIsValid, setLocalIsValid] = useState(isValid);

  const validateForm = () => {
    let isFormValid = true;
    const newValidationState = { ...localIsValid };

    if (!formData.message.trim()) {
      newValidationState.message = false;
      isFormValid = false;
    } else {
      newValidationState.message = true;
    }

    setLocalIsValid(newValidationState);
    return isFormValid;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      setStep(step + 1);
      setSending(true);

      const formDataI = new FormData();
      formDataI.append("access_key", "22bb481d-17a1-43bf-b247-8eb32ffde122");
      formDataI.append("name", formData.name);
      formDataI.append("email", formData.email);
      formDataI.append("interest", formData.interest);
      formDataI.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataI,
      });

      const data = await response.json();
      if (data.success) {
        setSent(true);
        setFormData({
          email: "",
          name: "",
          message: "",
          interest: "",
        });
      } else {
        console.log("Error", data);
      }
      setSending(false);
    }
  };
  const hoverGradients = [
    "linear-gradient(45deg, #ff5733, #8e44ad)",
    "linear-gradient(45deg, #3498db, #9b59b6)",
    "linear-gradient(45deg, #f39c12, #1abc9c)",
    "linear-gradient(45deg, #e74c3c, #2ecc71)",
    "linear-gradient(45deg, #9b59b6, #f1c40f)",
  ];
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="p-6 rounded-lg w-full text-center flex flex-col items-center"
    >
      Your message:
      <input
        className={`outline-none mx-4 px-2 border-b-2 ${
          isValid.message ? "focus:border-gray-600" : "border-red-500"
        }`}
        type="text"
        name="message"
        value={formData.message}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, message: e.target.value })
        }
      />
      {step === 3 && (
        <motion.input
          className="text-white rounded-full p-3 px-7 text-xl lg:text-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out w-[250px] mt-10 outline-none"
          animate={{
            backgroundImage: isHovering
              ? hoverGradients
              : ["linear-gradient(125deg,black,white)"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          whileTap={{ scale: 0.95 }}
          type="submit"
          value={"Next"}
        />
      )}
    </form>
  );
};
