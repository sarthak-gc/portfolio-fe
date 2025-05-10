import type { FormDataI } from "@/Pages/Form";

interface FormPage1Props {
  formData: { name: string; email: string; message: string; interest: string };
  setFormData: React.Dispatch<React.SetStateAction<FormDataI>>;
  isValid: { name: boolean; email: boolean };
}
export const FormPage1 = ({
  formData,
  setFormData,
  isValid,
}: FormPage1Props) => {
  return (
    <div>
      <div className="  text-start md:text-center">
        Hi, my name is
        <input
          className={`outline-none mx-4 px-2 border-b-2 w-44 ${
            isValid.name ? "focus:border-gray-600" : "border-red-500"
          }`}
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        and my email is
        <input
          className={`outline-none mx-4 px-2 border-b-2 w-44 ${
            isValid.email ? "focus:border-gray-600" : "border-red-500"
          }`}
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};
