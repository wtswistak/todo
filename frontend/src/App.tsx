import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/AddTask";
import TodoList from "./pages/TodoList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./state/store";
import PageNotFound from "./pages/PageNotFound";
import AuthRoute from "./routes/AuthRoute";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Login />} />
            <Route path="user/login" element={<Login />} />
            <Route path="user/sign-up" element={<SignUp />} />
            <Route
              path="*"
              element={
                <AuthRoute>
                  <Route index element={<AddTask />} />
                  <Route path="todo/add" element={<AddTask />} />
                  <Route path="todo/list" element={<TodoList />} />
                </AuthRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
