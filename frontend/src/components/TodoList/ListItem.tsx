import React from "react";
import { IoMdTrash, IoMdCheckboxOutline } from "react-icons/io";
import useFetch from "../../hooks/useFetch";
import config from "../../config";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../state/todoSlice";
import { getHeaders } from "../../helpers/helper";

const ListItem: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const { handleFetch } = useFetch();
  const todoId = todo.id;
  const dispatch = useDispatch();
  const headers = getHeaders();
  const userId = localStorage.getItem("userId");
  const endpoint = config.SERVER_URL + `user/${userId}/todos/${todoId}`;
  const handleDeleteTodo = async () => {
    await handleFetch(endpoint, "DELETE", headers);
    dispatch(removeTodo(todo.id));
  };

  const handleUpdateTodo = async () => {
    await handleFetch(endpoint, "PATCH", headers);
    dispatch(updateTodo(todo.id));
  };

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
        <IoMdTrash
          className="task-icon"
          size={26}
          title="delete"
          onClick={handleDeleteTodo}
        />

        {!todo.completed && (
          <IoMdCheckboxOutline
            className="task-icon"
            size={26}
            title="complete"
            onClick={handleUpdateTodo}
          />
        )}
      </div>
    </li>
  );
};

export default ListItem;
