import store from "@/redux/store";

export const getToken = () => {
  const state = store.getState();
  return state.auth?.token;
};
