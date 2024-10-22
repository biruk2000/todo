import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axios";
import { TodosState, Todo } from "@/types/todos";
import { RootState } from "./store";
const initialState: TodosState = {
  todos: [],
  status: "idle",
  error: null,
};

// Async thunk for fetching todos
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      console.log("eszh");
      const response = await axiosInstance.get<Todo[]>("/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      if (state.todo.status !== "idle") {
        return false;
      }
    },
  }
);
// Async thunk for adding todos
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo: Omit<Todo, "id">, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/todos", todo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for updating todos
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo: Todo, { rejectWithValue }) => {
    try {
      const { id, ...rest } = todo;
      const response = await axiosInstance.put(`/todos/${id}`, rest);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for deleting todos
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/todos/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch todos
    builder.addCase(fetchTodos.pending, (state) => {
      console.log("state", state.status);
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(
      fetchTodos.fulfilled,
      (state, action: PayloadAction<Todo[]>) => {
        state.status = "success";
        state.todos = action.payload;
      }
    );
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message as string;
    });

    // Add todo
    builder.addCase(addTodo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
      state.status = "success";
      state.todos.push(action.payload);
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message as string;
    });

    // Update todo
    builder.addCase(updateTodo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(
      updateTodo.fulfilled,
      (state, action: PayloadAction<Todo>) => {
        state.status = "success";
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      }
    );
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message as string;
    });

    // Delete todo
    builder.addCase(deleteTodo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(
      deleteTodo.fulfilled,
      (state, action: PayloadAction<Todo>) => {
        state.status = "success";
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
      }
    );
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message as string;
    });
  },
});

export const selectTodos = (state: TodosState) => state.todos;
export const selectTodosStatus = (state: TodosState) => state.status;
export const selectTodosError = (state: TodosState) => state.error;

export default todosSlice.reducer;
