import { Link } from "react-router-dom";
import AuthBtn from "../Auth/AuthBtn";
import AuthInput from "../Auth/AuthInput";
interface AuthFormProps {
  type: string;
  children?: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, children }) => {
  return (
    <div className="container p-0 mx-auto" style={{ maxWidth: "340px" }}>
      <h5 className="text-center  ">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h5>
      <form>
        {children}
        <label htmlFor="username">Username</label>
        <AuthInput type={"text"} />
        <label htmlFor="password">Password</label>
        <AuthInput type={"password"} />
        <AuthBtn type={type} />
        {type === "login" && (
          <div className="d-flex mt-1">
            <p className="font-sm">You don't have account?</p>
            <Link to={"/sign-up"} className="ms-1 font-sm sign-up-link">
              Sign up
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
