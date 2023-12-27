import { Outlet } from "react-router";
import "../index.css";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <div className="app-layout shadow-lg mx-auto pb-sm-5 ">
      <Header />
      <div className="p-sm-5 p-2 pb-5 px-3 py-5 d-flex outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
