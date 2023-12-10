import Button from "react-bootstrap/Button";
import Loader from "../Loader";

interface FormBtnProps {
  handleAddTask: () => void;
  isLoading?: boolean;
}

const FormBtn: React.FC<FormBtnProps> = ({ handleAddTask, isLoading }) => {
  return (
    <Button
      type="submit"
      className="form-btn rounded-4 px-4 py-2 mt-4 mb-1"
      onClick={handleAddTask}
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : "Add task"}
    </Button>
  );
};

export default FormBtn;
