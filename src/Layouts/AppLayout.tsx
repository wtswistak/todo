import { Outlet } from "react-router";
import "../index.css";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <div
      className="p-sm-5 custom-layout p-4 shadow-lg mx-auto mt-sm-5 mt-0"
      style={{
        backgroundColor: "var(--bg-layout)",
        maxWidth: "576px",
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
