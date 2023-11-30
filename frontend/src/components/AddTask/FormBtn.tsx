import Button from "react-bootstrap/Button";

interface FormBtnProps {
  handleAddTask: () => void;
}

const FormBtn: React.FC<FormBtnProps> = ({ handleAddTask }) => {
  return (
    <Button
      type="submit"
      className="form-btn rounded-4 px-4 py-2 mt-4"
      onClick={handleAddTask}
    >
      Add task
    </Button>
  );
};

export default FormBtn;
