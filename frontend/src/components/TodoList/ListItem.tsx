import React from "react";
import { IoMdTrash, IoMdCheckboxOutline } from "react-icons/io";

const ListItem: React.FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    <li className="task-box d-flex py-2 px-3 rounded-1 align-items-center justify-content-between ">
      <div className="d-flex align-items-center">
        <span
          className={`me-2 priority ${
            todo.priority === "high"
              ? "priority-high"
              : todo.priority === "low"
              ? "priority-low"
              : "priority-medium"
          } `}
        ></span>
        <p>{todo.title}</p>
      </div>
      <div className="d-flex gap-1 align-items-center">
        <IoMdTrash className="task-icon" size={26} title="delete" />

        {!todo.completed && (
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
