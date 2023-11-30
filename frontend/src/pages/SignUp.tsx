import AuthForm from "../components/Auth/AuthForm";
import AuthInput from "../components/Auth/AuthInput";

const SignUp = () => {
  return (
    <AuthForm type="signup">
      <label htmlFor="email">Email</label>
      <AuthInput type="email" />
    </AuthForm>
  );
};

export default SignUp;
