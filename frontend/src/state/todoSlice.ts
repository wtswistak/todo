import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: ITodo[];
  completedTodos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
  completedTodos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<{ todos: ITodo[] }>) => {
      console.log(action.payload);
      state.todos = action.payload.todos.filter((todo) => !todo.completed);
      state.completedTodos = action.payload.todos.filter(
        (todo) => todo.completed
      );
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const todoIdToRemove = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoIdToRemove);
      state.completedTodos = state.completedTodos.filter(
        (todo) => todo.id !== todoIdToRemove
      );
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const todoUpdate = state.todos.find((todo) => todo.id === todoId);
      if (todoUpdate) {
        todoUpdate.completed = true;
        state.completedTodos.unshift(todoUpdate);
        state.todos = state.todos.filter((todo) => todo.id !== todoId);
      }
    },
  },
});

export const { setTodos, removeTodo, updateTodo } = todoSlice.actions;
export const selectTodos = (state: { todos: TodoState }) => state.todos.todos;
export const selectCompletedTodos = (state: { todos: TodoState }) =>
  state.todos.completedTodos;

export default todoSlice.reducer;
