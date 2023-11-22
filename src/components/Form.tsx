import { useState } from "react";
import { Form as FormBs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MdAdd } from "react-icons/md";

interface Task {
  task: string;
  complete: boolean;
}

const Form: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTask = () => {
    const task: Task = { task: inputValue, complete: false };
    setTasks([...tasks, task]);
    console.log(tasks);
  };
  return (
    <FormBs
      className="d-flex mt-4 mt-sm-0 "
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormBs.Control
        type="text"
        placeholder="Add new task"
        className="rounded-0 border-0 text-light custom-input "
        style={{ backgroundColor: "var(--clr-primary-light)" }}
        onChange={(e) => setInputValue(e.target.value)}
        required
        minLength={4}
      />
      <div
        className="px-2 py-1"
        style={{ backgroundColor: "var(--clr-primary-light)" }}
      >
        <Button
          variant="primary"
          type="submit"
          className="rounded-0 font-weight-bold p-0"
          style={{ backgroundColor: "inherit", border: "none" }}
          onClick={handleAddTask}
        >
          <MdAdd size={"32px"} />
        </Button>
      </div>
    </FormBs>
  );
};

export default Form;
