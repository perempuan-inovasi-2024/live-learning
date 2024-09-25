import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    todos: [],
  },
  reducers: {
    startFetch: (state) => {
      state.isLoading = true;
    },
    successGetData: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
  },
});

export function addTodo(input) {
  return async function (dispatch) {
    let newTodo = {
      task: input,
      status: false,
    };
    console.log(newTodo);

    await axios.post(
      "https://643e1624c72fda4a0bed5b7f.mockapi.io/todo",
      newTodo
    );

    dispatch(getAllTodos());
  };
}

export function getAllTodos() {
  return async function (dispatch) {
    dispatch(startFetch());
    const { data } = await axios.get(
      "https://643e1624c72fda4a0bed5b7f.mockapi.io/todo"
    );
    dispatch(successGetData(data));
  };
}

const { startFetch, successGetData } = todoSlice.actions;
export default todoSlice.reducer;
