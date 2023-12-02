import Loader from "../Loader";

interface AuthBtnProps {
  type: string;
  isLoading?: boolean;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ type, isLoading }) => {
  return (
    <button className="btn form-btn mt-3 w-100" disabled={isLoading}>
      {isLoading ? <Loader /> : type === "login" ? "Login" : "Sign Up"}
    </button>
  );
};

export default AuthBtn;
