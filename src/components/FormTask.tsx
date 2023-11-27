import { useState } from "react";
import { Form as FormBs } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
      className=" mt-4 mt-sm-0 "
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h5 className="">Enter the task </h5>
      <FormBs.Control
        type="text"
        placeholder="Learn javascript"
        className="rounded-1 border-0 text-light input-task mb-4 "
        style={{ backgroundColor: "var(--clr-primary-light)" }}
        onChange={(e) => setInputValue(e.target.value)}
        required
        minLength={4}
      />
      <h5 className="">Select the priority level of the task </h5>
      <div className="d-flex align-items-center mb-1 ms-1 ">
        <FormBs.Check
          type="radio"
          name="priority"
          id="high"
          className="radio-priority"
          required
        />
        <FormBs.Label htmlFor="high">High</FormBs.Label>
      </div>
      <div className="d-flex align-items-center mb-1 ms-1">
        <FormBs.Check
          type="radio"
          name="priority"
          id="medium"
          className="radio-priority"
          required
        />
        <FormBs.Label htmlFor="medium">Medium</FormBs.Label>
      </div>
      <div className="d-flex align-items-center mb-1 ms-1">
        <FormBs.Check
          type="radio"
          name="priority"
          id="low"
          className="radio-priority"
          required
        />
        <FormBs.Label htmlFor="low">Low</FormBs.Label>
      </div>

      <Button
        type="submit"
        className="fw-semibold form-btn rounded-4 px-4 py-2 mt-4"
        onClick={handleAddTask}
      >
        Add task
      </Button>
    </FormBs>
  );
};

export default Form;
