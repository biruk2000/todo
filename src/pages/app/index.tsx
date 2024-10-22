import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, selectTodos } from "@/redux/todosSlice";
import { AppDispatch, RootState } from "@/redux/store";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.todo.status);
  const todos = useSelector(selectTodos);

  console.log(todos);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);
  return <div>HomePage</div>;
};

export default HomePage;
