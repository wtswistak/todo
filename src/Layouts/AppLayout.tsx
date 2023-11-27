import { Outlet } from "react-router";
import "../index.css";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <div className="app-layout shadow-lg mx-auto   ">
      <Header />
      <div className="p-sm-5 pt-sm-0 p-2 px-3 pt-0 d-flex outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
