import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/AddTask";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<AddTask />} />
          <Route path="add-task" element={<AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
