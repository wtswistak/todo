import { useEffect, useRef, useState } from "react";
import List from "../components/TodoList/List";
import ListHeader from "../components/TodoList/ListHeader";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../state/userSlice";
import useFetch from "../hooks/useFetch";
import config from "../config";
import Loader from "../components/Loader";
import {
  selectCompletedTodos,
  selectTodos,
  setTodos,
} from "../state/todoSlice";
import { getHeaders } from "../helpers/helper";

const TodoList = () => {
  const [isTodoListVisible, setIsTodoListVisible] = useState<boolean>(true);
  const [isCompletedListVisible, setIsCompletedListVisible] =
    useState<boolean>(true);

  const dispatch = useDispatch();
  const { id, isLoading } = useSelector(selectUser);
  const { handleFetch } = useFetch();
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);
  const isMounted = useRef(false);
  const headers = getHeaders();

  const getTodos = async () => {
    const endpoint = config.SERVER_URL + `user/${id}/todos/`;

    console.log(todos);
    const { data } = await handleFetch(endpoint, "GET", headers);
    dispatch(setTodos({ todos: data.todos }));
  };
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      getTodos();
    }
  }, [isMounted.current]);

  return (
    <div className="container-fluid p-0 pe-sm-2 list-box">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ListHeader
            children={"Tasks todo"}
            isVisible={isTodoListVisible}
            setIsVisible={setIsTodoListVisible}
          />
          <List todos={todos} isVisible={isTodoListVisible} />
          <ListHeader
            children={"Tasks completed"}
            isVisible={isCompletedListVisible}
            setIsVisible={setIsCompletedListVisible}
          />
          <List todos={completedTodos} isVisible={isCompletedListVisible} />
        </>
      )}
    </div>
  );
};

export default TodoList;
// const TodoList = () => {
//   const [isTodoListVisible, setIsTodoListVisible] = useState<boolean>(true);
//   const [isCompletedListVisible, setIsCompletedListVisible] =
//     useState<boolean>(true);

//   const [todos, setTodos] = useState<ITodo[]>([]);
//   const [completedTodos, setCompletedTodos] = useState<ITodo[]>([]);
//   const { handleFetch } = useFetch();
//   const { id, isLoading } = useSelector(selectUser);
//   const isMounted = useRef(false);

//   const getTodos = async () => {
//     const token = localStorage.getItem("token");
//     const endpoint = config.SERVER_URL + `user/${id}/todos/`;

//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };

//     const { data } = await handleFetch(endpoint, "GET", headers);
//     setTodos(data.todos.filter((todo: ITodo) => !todo.completed));
//     setCompletedTodos(data.todos.filter((todo: ITodo) => todo.completed));
//     console.log("wys");
//   };
//   useEffect(() => {
//     if (!isMounted.current) {
//       isMounted.current = true;
//       getTodos();
//     }
//   }, [isMounted.current]);
