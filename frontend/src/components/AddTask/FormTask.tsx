import { useState } from "react";
import { Form as FormBs } from "react-bootstrap";
import FormBtn from "./FormBtn";
import RadioRow from "./RadioRow";
import FormInput from "./FormInput";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/userSlice";
import config from "../../config";
import Message from "../Message";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { handleFetch, isLoading } = useFetch();
  const { id } = useSelector(selectUser);

  const handleAddTask = async () => {
    const token = localStorage.getItem("token");
    const endpoint = config.SERVER_URL + `user/${id}/todos`;

    let body = {
      userId: id,
      title: inputValue,
      priority: priority,
      token: token,
      completed: false,
    };
    const { data, response, error } = await handleFetch(
      endpoint,
      "POST",
      {},
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

      <FormBtn handleAddTask={handleAddTask} isLoading={isLoading} />
      <Message message={message} isLoading={isLoading} />
    </FormBs>
  );
};

export default Form;
