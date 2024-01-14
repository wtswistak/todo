import { useEffect, useRef, useState } from "react";
import List from "../components/TodoList/List";
import ListHeader from "../components/TodoList/ListHeader";
import { useDispatch, useSelector } from "react-redux";
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
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.todos.isLoading);
  const { handleFetch } = useFetch();
  const isMounted = useRef(false);
  const headers = getHeaders();
  const userId = localStorage.getItem("userId");

  const getTodos = async () => {
    const endpoint = config.SERVER_URL + `user/${userId}/todos/`;

    const { data } = await handleFetch(endpoint, "GET", headers);
    dispatch(setTodos({ todos: data.todos?.reverse() }));
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
      ) : !todos.length && !completedTodos.length ? (
        <p>You don't have any task</p>
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
