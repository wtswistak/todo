import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/AddTask";
import TodoList from "./pages/TodoList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<AddTask />} />
          <Route path="add-task" element={<AddTask />} />
          <Route path="todo-list" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
