import React from "react";
import { IoMdTrash, IoMdCheckboxOutline } from "react-icons/io";

interface Task {
  id: number;
  task: string;
  priority: string;
  completed: boolean;
}

const ListItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <li
      key={task.id}
      className="task-box d-flex py-2 px-3 rounded-1 align-items-center justify-content-between "
    >
      <div className="d-flex align-items-center">
        <span
          className={`me-2 priority ${
            task.priority === "high"
              ? "priority-high"
              : task.priority === "low"
              ? "priority-low"
              : "priority-medium"
          } `}
        ></span>
        <p>{task.task}</p>
      </div>
      <div className="d-flex gap-1 align-items-center">
        <IoMdTrash className="task-icon" size={26} title="delete" />

        {!task.completed && (
          <IoMdCheckboxOutline
            className="task-icon"
            size={26}
            title="complete"
          />
        )}
      </div>
    </li>
  );
};

export default ListItem;
