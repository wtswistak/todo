import { Form as FormBs } from "react-bootstrap";
interface FormInputProps {
  setInputValue: (value: string) => void;
}
const FormInput: React.FC<FormInputProps> = ({ setInputValue }) => {
  return (
    <FormBs.Control
      type="text"
      placeholder="Task to do"
      className="rounded-1 border-0 text-light input-task mb-4 "
      style={{ backgroundColor: "var(--clr-primary-light)" }}
      onChange={(e) => setInputValue(e.target.value)}
      required
      minLength={4}
    />
  );
};

export default FormInput;
