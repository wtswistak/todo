import { Outlet } from "react-router";
import "../index.css";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <div
      className="custom-layout shadow-lg mx-auto  mt-0 "
      style={{
        backgroundColor: "var(--clr-primary)",
        maxWidth: "720px",
      }}
    >
      <Header />
      <div className="p-sm-5 pt-sm-0 p-4 pt-0 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
