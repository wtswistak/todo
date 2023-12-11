import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../state/userSlice";

const Header = () => {
  const { username } = useSelector(selectUser);
  return (
    username && (
      <div
        className="d-flex px-sm-5 rounded-top px-0 justify-content-between header"
        style={{ backgroundColor: "var(--clr-primary-dark)" }}
      >
        <div className="d-flex">
          <NavLink to="/todos/add" className="nav-link ">
            Add Task
          </NavLink>
          <NavLink to="/todos" className="nav-link">
            Todo list
          </NavLink>
        </div>
        <NavLink to={"/"} className="nav-link">
          Logout
        </NavLink>
      </div>
    )
  );
};

export default Header;
