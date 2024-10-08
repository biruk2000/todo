import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const IsAuthenticated = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  return !!token;
};
const ProtectedRoute = () => {
  console.log("isAuthenticated", IsAuthenticated());
  return IsAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
