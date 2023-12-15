import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const isLoading = useSelector((state: any) => state.todos.isLoading);
  let userId = localStorage.getItem("userId");
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    let userId = localStorage.getItem("userId");
  }, [location.pathname]);

  return (
    userId && (
      <div
        className="d-flex px-sm-5 rounded-top px-0 justify-content-between header"
        style={{ backgroundColor: "var(--clr-primary-dark)" }}
      >
        <div className="d-flex">
          <NavLink
            to="/todos/add"
            className={`nav-link ${isLoading ? "disabled" : ""}`}
          >
            Add Task
          </NavLink>
          <NavLink
            to="/todos"
            className={`nav-link ${isLoading ? "disabled" : ""}`}
          >
            Todo list
          </NavLink>
        </div>
        <NavLink
          to={"/auth/login"}
          className={`nav-link ${isLoading ? "disabled" : ""}`}
          onClick={() => handleLogout()}
        >
          Logout
        </NavLink>
      </div>
    )
  );
};

export default Header;
