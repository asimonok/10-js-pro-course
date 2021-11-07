import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../types/todo";

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
          doneList: false,
          todolist: false,
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
    removeAllTodos: (state) => {
      state.splice(0, state.length);
    },
    deleteDoneTasks: (state) => {
      for (let index = 0; index < state.length; index++) {
        if (state[index].completed === true) {
          state.splice(index, 1);
        }
      }
    },
    filterDoneTasks: (state) => {
      //   let newState = Object.assign({}, state);
      //   for (let index = 0; index < state.length; index++) {
      //     if (state[index].completed === true) {
      //     }
      //   }
      //   return newState;
    },
  },
});

export const { addTodo, removeTodo, setTodoStatus, removeAllTodos, deleteDoneTasks } =
  todoSlice.actions;
export default todoSlice.reducer;
