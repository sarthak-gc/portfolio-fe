import Button from "@/Components/Contact/Button";
import Form from "./Form";
import { useState } from "react";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="w-full bg-black grid grid-cols-7 pb-20">
      <Button setIsClicked={setIsClicked} text="GET IN TOUCH" />
      <Form isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Contact;
