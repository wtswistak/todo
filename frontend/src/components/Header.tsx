import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="d-flex px-sm-5 mb-5 rounded-top px-0 justify-content-between header"
      style={{ backgroundColor: "var(--clr-primary-dark)" }}
    >
      <div className="d-flex">
        <NavLink to="/add-task" className="nav-link ">
          Add Task
        </NavLink>
        <NavLink to="/todo-list" className="nav-link">
          Todo list
        </NavLink>
      </div>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
