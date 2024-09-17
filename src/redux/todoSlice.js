import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const curTodo = state.find((todo) => todo.id === action.payload);
      curTodo.isDone = !curTodo.isDone;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
