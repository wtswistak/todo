import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex mb-4">
      <NavLink to="/add-task" className="nav-link me-2">
        Add Task
      </NavLink>
      <NavLink to="/list" className="nav-link">
        List
      </NavLink>
    </div>
  );
};

export default Header;
