import type { FormDataI } from "@/Pages/Form";

interface FormPage2Props {
  formData: { name: string; email: string; message: string; interest: string };
  setFormData: React.Dispatch<React.SetStateAction<FormDataI>>;
  isValid: { interest: boolean };
}

export const FormPage2 = ({
  formData,
  setFormData,
  isValid,
}: FormPage2Props) => {
  return (
    <div>
      I am interested in
      <input
        className={`outline-none mx-4 px-2 border-b-2 ${
          isValid.interest ? "focus:border-gray-600" : "border-red-500"
        }`}
        type="text"
        name="interest"
        value={formData.interest}
        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
      />
    </div>
  );
};
