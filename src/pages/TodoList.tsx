import List from "../components/TodoList/List";

const TodoList = () => {
  return (
    <div className="overflow-y-auto container-fluid p-0 pe-sm-2  list-box">
      <h5>Tasks to do</h5>
      <List type={"todo"} />
      <h5>Tasks completed</h5>
      <List type={"completed"} />

      {/* <ul className="d-flex flex-column gap-2 px-0 mb-4">
        {tasks
          .filter((task) => task.completed)
          .map((task) => {
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
          })}
      </ul> */}
    </div>
  );
};

export default TodoList;
