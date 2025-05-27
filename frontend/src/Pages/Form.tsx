import { Footer } from "@/Components/Contact/FormPages/Footer";
import { FormPage1 } from "@/Components/Contact/FormPages/FormPage1";
import { FormPage2 } from "@/Components/Contact/FormPages/FormPage2";
import { FormPage3 } from "@/Components/Contact/FormPages/FormPage3";
import { FormPage4 } from "@/Components/Contact/FormPages/FormPage4";
import { Title } from "@/Components/Contact/FormPages/Title";
import { useState } from "react";

export interface FormDataI {
  name: string;
  email: string;
  interest: string;
  message: string;
}

interface IsValid {
  name: boolean;
  email: boolean;
  interest: boolean;
  message: boolean;
}
interface FormPropI {
  isClicked: boolean;

  setIsClicked: (val: boolean) => void;
}
const Form = ({ isClicked, setIsClicked }: FormPropI) => {
  const [formData, setFormData] = useState<FormDataI>({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const [isValid, setIsValid] = useState<IsValid>({
    name: true,
    email: true,
    interest: true,
    message: true,
  });

  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (step: number): boolean => {
    const newIsValid = {
      name: true,
      email: true,
      interest: true,
      message: true,
    };
    let isFormValid = true;
    if (step == 1) {
      if (!formData.name.trim()) {
        newIsValid.name = false;
        isFormValid = false;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        newIsValid.email = false;
        isFormValid = false;
      }
    }
    if (step == 2 && !formData.interest.trim()) {
      newIsValid.interest = false;
      isFormValid = false;
    }
    if (step == 3 && !formData.message.trim()) {
      newIsValid.message = false;
      isFormValid = false;
    }

    setIsValid(newIsValid);
    return isFormValid;
  };

  const handleNext = () => {
    if (validate(step) && step < 3) {
      setStep(step + 1);
    }
  };

  const formPages = [
    <FormPage1
      formData={formData}
      setFormData={setFormData}
      isValid={isValid}
    />,
    <FormPage2
      formData={formData}
      setFormData={setFormData}
      isValid={isValid}
    />,
    <FormPage3
      formData={formData}
      setFormData={setFormData}
      step={step}
      isValid={isValid}
      setSent={setSent}
      setStep={setStep}
      setSending={setSending}
    />,
    <FormPage4 sending={sending} sent={sent} />,
  ];

  return (
    <div>
      {isClicked && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="p-6 rounded-lg w-full text-center">
            <Title />
            <div className="text-white mt-20">{formPages[step - 1]}</div>
            <Footer
              step={step}
              sent={sent}
              setSent={setSent}
              setStep={setStep}
              handleNext={handleNext}
              setIsClicked={setIsClicked}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
