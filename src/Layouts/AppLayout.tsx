import Form from "../components/Form";
import "../index.css";
const AppLayout = () => {
  return (
    <div
      className="p-sm-5 custom-layout p-4 shadow-lg mx-auto mt-sm-5 mt-0"
      style={{
        backgroundColor: "var(--bg-layout)",
        maxWidth: "576px",
      }}
    >
      <Form />
    </div>
  );
};

export default AppLayout;
