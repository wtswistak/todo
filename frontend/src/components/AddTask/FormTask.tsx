import { useEffect, useState } from "react";
import { Form as FormBs } from "react-bootstrap";
import FormBtn from "./FormBtn";
import RadioRow from "./RadioRow";
import FormInput from "./FormInput";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import config from "../../config";
import Message from "../Message";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { handleFetch } = useFetch();
  const isLoading = useSelector((state: any) => state.todos.isLoading);
  const userId = localStorage.getItem("userId");

  const handleAddTask = async () => {
    const token = localStorage.getItem("token");
    const endpoint = config.SERVER_URL + `user/${userId}/todos`;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    let body = {
      title: inputValue,
      priority: priority,
      completed: false,
    };
    const { data, response } = await handleFetch(
      endpoint,
      "POST",
      headers,
      body
    );
    setMessage(data.message);
    console.log(response);
  };

  return (
    <FormBs
      className=" mt-sm-0 container-fluid p-0"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTask();
      }}
    >
      <h5>Enter the task </h5>
      <FormInput setInputValue={setInputValue} />
      <h5>Select the priority level of the task </h5>
      <RadioRow variety="high" setPriority={setPriority} priority={priority} />
      <RadioRow
        variety="medium"
        setPriority={setPriority}
        priority={priority}
      />
      <RadioRow variety="low" setPriority={setPriority} priority={priority} />

      <FormBtn isLoading={isLoading} />
      <Message message={message} isLoading={isLoading} />
    </FormBs>
  );
};

export default Form;
