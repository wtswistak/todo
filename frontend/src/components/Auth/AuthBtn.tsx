interface AuthBtnProps {
  type: string;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ type }) => {
  return (
    <button className="btn form-btn mt-3 w-100">
      {type === "login" ? "Login" : "Sign Up"}
    </button>
  );
};

export default AuthBtn;
