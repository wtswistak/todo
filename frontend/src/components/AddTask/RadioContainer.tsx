import { Form as FormBs } from "react-bootstrap";

interface RadioContainerProps {
  priority: string;
}

const RadioContainer: React.FC<RadioContainerProps> = ({ priority }) => {
  return (
    <div className="d-flex align-items-center mb-1 ms-1 ">
      <FormBs.Check
        type="radio"
        name="priority"
        id={`${priority}`}
        className="radio-priority"
        required
      />
      <FormBs.Label htmlFor={`${priority}`}>{`${
        priority.charAt(0).toUpperCase() + priority.slice(1)
      }`}</FormBs.Label>
    </div>
  );
};

export default RadioContainer;
