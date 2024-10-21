import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "@/redux/todosSlice";
import { AppDispatch } from "@/redux/store";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return <div>HomePage</div>;
};

export default HomePage;
