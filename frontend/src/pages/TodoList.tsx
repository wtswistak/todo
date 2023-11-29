import { useState } from "react";
import List from "../components/TodoList/List";
import ListHeader from "../components/TodoList/ListHeader";

const TodoList = () => {
  const [isTodoListVisible, setIsTodoListVisible] = useState<boolean>(true);
  const [isCompletedListVisible, setIsCompletedListVisible] =
    useState<boolean>(true);

  return (
    <div className="container-fluid p-0 pe-sm-2  list-box">
      <ListHeader
        children={"Tasks to do"}
        isVisible={isTodoListVisible}
        setIsVisible={setIsTodoListVisible}
      />
      <List type={"todo"} isVisible={isTodoListVisible} />
      <ListHeader
        children={"Tasks completed"}
        isVisible={isCompletedListVisible}
        setIsVisible={setIsCompletedListVisible}
      />
      <List type={"completed"} isVisible={isCompletedListVisible} />
    </div>
  );
};

export default TodoList;
