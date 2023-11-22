import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="d-flex mb-4 px-sm-5 rounded-top px-4 justify-content-between header"
      style={{ backgroundColor: "var(--clr-primary-dark)" }}
    >
      <div className="d-flex">
        <NavLink to="/add-task" className="nav-link ">
          Add Task
        </NavLink>
        <NavLink to="/list" className="nav-link">
          List
        </NavLink>
      </div>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
