import { useSelector } from "react-redux";
import { Navigate, Routes } from "react-router-dom";
import { selectUser } from "../state/userSlice";

interface AuthRouteProps {
  children?: React.ReactNode;
}
const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { username } = useSelector(selectUser);

  if (!username) {
    return <Navigate to="/auth/login" />;
  }

  return <Routes>{children}</Routes>;
};

export default AuthRoute;
