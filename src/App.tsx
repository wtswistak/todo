import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/AddTask";
import ListTask from "./pages/ListTask";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<AddTask />} />
          <Route path="add-task" element={<AddTask />} />
          <Route path="list-task" element={<ListTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
