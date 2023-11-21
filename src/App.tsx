import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Form />} />
          <Route path="add-task" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
