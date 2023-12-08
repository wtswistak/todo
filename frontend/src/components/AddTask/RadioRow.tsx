import { Form as FormBs } from "react-bootstrap";

interface RadioRowProps {
  variety: string;
  setPriority?: React.Dispatch<React.SetStateAction<string>>;
  priority?: string;
}

const RadioRow: React.FC<RadioRowProps> = ({
  variety,
  setPriority,
  priority,
}) => {
  return (
    <div className="d-flex align-items-center mb-1 ms-1 ">
      <FormBs.Check
        type="radio"
        name="priority"
        id={`${variety}`}
        className="radio-priority"
        onChange={() => {
          setPriority && setPriority(variety);
        }}
        checked={priority === variety}
        required
      />
      <FormBs.Label htmlFor={`${variety}`}>{`${
        variety.charAt(0).toUpperCase() + variety.slice(1)
      }`}</FormBs.Label>
    </div>
  );
};

export default RadioRow;
