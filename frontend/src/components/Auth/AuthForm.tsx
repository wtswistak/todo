import { Link, useNavigate } from "react-router-dom";
import AuthBtn from "../Auth/AuthBtn";
import AuthInput from "../Auth/AuthInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import config from "../../config";
import useFetch from "../../hooks/useFetch";
import Message from "../Message";
import { IoArrowBack } from "react-icons/io5";

interface AuthFormProps {
  type: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState<string>("tester12@test.com");
  const [password, setPassword] = useState<string>("tester12");
  const [username, setUsername] = useState<string>("tester12");
  const [message, setMessage] = useState<string>("");
  const { handleFetch } = useFetch();

  const navigate = useNavigate();
  const isLoading = useSelector((state: any) => state.todos.isLoading);

  const handleAuth = async (type: string) => {
    let body = {};
    let endpoint = config.SERVER_URL + "auth/";

    if (type === "login") {
      endpoint += "login";
      body = { username, password };
    }
    if (type === "signup") {
      endpoint += "sign-up";
      body = { email, password, username };
    }

    const { data, response } = await handleFetch(endpoint, "POST", {}, body);
    setMessage(data?.message);
    if (!response?.ok) {
      return null;
    }
    if (type === "login") {
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("token", data.token);
      const userIdd = localStorage.getItem("userId");
      if (userIdd) navigate("/todos/add");
    }
    if (type === "signup") {
      setPassword("");
      setEmail("");
      setUsername("");
    }
  };
  return (
    <div
      className="container p-0 mx-auto my-sm-5 auth-form"
      style={{ maxWidth: "340px" }}
    >
      <div className="container position-relative ">
        <h5 className="text-center  ">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h5>
        {type === "signup" && (
          <IoArrowBack
            size={24}
            className="position-absolute end-0 top-0 me-1"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/auth/login")}
          />
        )}
      </div>
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
        <label htmlFor="text">Username</label>
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
            <Link to={"/auth/sign-up"} className="ms-1 font-sm sign-up-link">
              Sign up
            </Link>
          </div>
        )}
        <Message message={message} />
      </form>
    </div>
  );
};

export default AuthForm;
