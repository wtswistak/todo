import { useState } from "react";
import ListItem from "./ListItem";
interface Task {
  id: number;
  task: string;
  priority: string;
  completed: boolean;
}
interface ListProps {
  type: string;
}

const List: React.FC<ListProps> = ({ type }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      task: "Learn React Learn React Learn React",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      task: "Learn Typescript",
      priority: "medium",
      completed: false,
    },
    {
      id: 3,
      task: "Learn Redux",
      priority: "low",
      completed: false,
    },
    {
      id: 4,
      task: "Learn Redux",
      priority: "low",
      completed: true,
    },
    {
      id: 5,
      task: "Learn Redux",
      priority: "low",
      completed: true,
    },
    {
      id: 6,
      task: "Learn Redux",
      priority: "low",
      completed: true,
    },
    {
      id: 7,
      task: "Learn Redux",
      priority: "low",
      completed: true,
    },
  ]);

  return (
    <ul className="d-flex flex-column gap-2 px-0 mb-4">
      {tasks
        .filter((task) => !task.completed)
        .map((task) => {
          return <ListItem task={task} key={task.id} />;
        })}
    </ul>
  );
};

export default List;
