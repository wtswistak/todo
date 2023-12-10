interface ITodo {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  userId: number;
  completed: boolean;
}
