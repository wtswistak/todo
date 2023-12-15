import Button from "react-bootstrap/Button";
import Loader from "../Loader";

interface FormBtnProps {
  isLoading?: boolean;
}

const FormBtn: React.FC<FormBtnProps> = ({ isLoading }) => {
  return (
    <Button
      type="submit"
      className="form-btn rounded-4 px-4 py-2 mt-4 mb-1"
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : "Add task"}
    </Button>
  );
};

export default FormBtn;
