import { useState } from "react";
import { IoMdClose, IoMdCheckmark, IoMdCreate } from "react-icons/io";
interface Task {
  task: string;
  priority: string;
  complete: boolean;
}

const ListTask = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      task: "Learn React Learn React Learn React",
      priority: "high",
      complete: false,
    },
    {
      task: "Learn Typescript",
      priority: "medium",
      complete: false,
    },
    {
      task: "Learn Redux",
      priority: "low",
      complete: false,
    },
  ]);

  return (
    <div className="d-flex flex-column gap-2">
      {tasks.map((task) => {
        return (
          <div className="custom-item d-flex py-2 px-3 rounded-1 align-items-center justify-content-between">
            <p>{task.task}</p>
            <div className="d-flex gap-1 align-items-center">
              <span
                className={`mx-2 priority ${
                  task.priority === "high"
                    ? "priority-high"
                    : task.priority === "low"
                    ? "priority-low"
                    : "priority-medium"
                } `}
              ></span>
              <IoMdCreate size={24} /> <IoMdClose size={24} />{" "}
              <IoMdCheckmark size={24} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTask;
