import { useState } from "react";
import { Form as FormBs } from "react-bootstrap";
import FormBtn from "./FormBtn";
import RadioContainer from "./RadioContainer";
import FormInput from "./FormInput";

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
      className=" mt-sm-0 container-fluid p-0"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h5>Enter the task </h5>
      <FormInput setInputValue={setInputValue} />
      <h5>Select the priority level of the task </h5>
      <RadioContainer priority="high" />
      <RadioContainer priority="medium" />
      <RadioContainer priority="low" />

      <FormBtn handleAddTask={handleAddTask} />
    </FormBs>
  );
};

export default Form;
