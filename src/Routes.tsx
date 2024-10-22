import { Route, Routes } from "react-router-dom";
import EmptyLayout from "./layouts/emptyLayout";
// import routes from "~react-pages";
import MainLayout from "./layouts/mainLayout";
import LoginPage from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import UsersPage from "./pages/app";
import NotFoundPage from "./pages/NotFound";
import AboutPage from "./pages/about";
import SignupPage from "./pages/signup/index";
import PaymentsPage from "./pages/payments";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<EmptyLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard/users" element={<UsersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
