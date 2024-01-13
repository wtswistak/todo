import { Navigate, Routes } from "react-router-dom";

interface AuthRouteProps {
  children?: React.ReactNode;
}
const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const user = localStorage.getItem("userId");

  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  if (user) return <Navigate to="/todos/add" />;

  return <Routes>{children}</Routes>;
};

export default AuthRoute;
