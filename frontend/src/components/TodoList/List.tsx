import ListItem from "./ListItem";

interface ListProps {
  isVisible: boolean;
  todos: ITodo[];
}

const List: React.FC<ListProps> = ({ isVisible, todos }) => {
  return (
    <ul
      className={`${
        isVisible ? "d-flex" : "d-none"
      } flex-column gap-2 px-0 mb-4 overflow-hidden `}
    >
      {todos?.map((todo) => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default List;
