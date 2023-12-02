import { Link } from "react-router-dom";
import AuthBtn from "../Auth/AuthBtn";
import AuthInput from "../Auth/AuthInput";
import { useState } from "react";
interface AuthFormProps {
  type: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAuth = async (type: string) => {
    setIsLoading(true);
    try {
      let endpoint = "http://localhost:3000/";
      let body = {};

      if (type === "login") {
        endpoint += "login";
        body = { username: username, password: password };
      } else if (type === "signup") {
        endpoint += "sign-up";
        body = { email: email, password: password, username: username };
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setErrorMessage(data.message);

      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setPassword("");
      setEmail("");
      setUsername("");
      setIsLoading(false);
    }
  };
  return (
    <div className="container p-0 mx-auto" style={{ maxWidth: "340px" }}>
      <h5 className="text-center  ">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAuth(type);
        }}
      >
        {type === "signup" && (
          <>
            <label htmlFor="email">Email</label>
            <AuthInput type="email" value={email} setInputValue={setEmail} />
          </>
        )}
        <label htmlFor="username">Username</label>
        <AuthInput type={"text"} value={username} setInputValue={setUsername} />
        <label htmlFor="password">Password</label>
        <AuthInput
          type={"password"}
          value={password}
          setInputValue={setPassword}
        />
        <AuthBtn type={type} isLoading={isLoading} />
        {type === "login" && (
          <div className="d-flex mt-1">
            <p className="font-sm">You don't have account?</p>
            <Link to={"/user/sign-up"} className="ms-1 font-sm sign-up-link">
              Sign up
            </Link>
          </div>
        )}
        {errorMessage && (
          <div className="d-flex mt-1">
            <p className="font-sm font-alert">{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
