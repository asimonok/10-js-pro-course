import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../types/todo";

export const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        if (action.payload.description === "") {
          return state;
        }
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(), // or Date.now()
          description,
          completed: false,
          edit: false,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(state, action: PayloadAction<{ completed: boolean; id: string }>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    editTodo(state, action: PayloadAction<{ id: string; description: string | null }>) {
      if (action.payload.description === null) {
        return state;
      }
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].description = action.payload.description;
    },
    toggleEdit(state, action: PayloadAction<{ edit: boolean; id: string }>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].edit = action.payload.edit;
    },
    removeAllTodos: (state) => {
      state.splice(0, state.length);
    },
    deleteDoneTasks: (state) => {
      return state.filter((todo) => todo.completed === false);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  setTodoStatus,
  editTodo,
  removeAllTodos,
  deleteDoneTasks,
  toggleEdit,
} = todoSlice.actions;
export default todoSlice.reducer;
