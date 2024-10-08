import { Route, Routes } from "react-router-dom";
import EmptyLayout from "./layouts/emptyLayout";
// import routes from "~react-pages";
import MainLayout from "./layouts/mainLayout";
import LoginPage from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import UsersPage from "./pages/dashboard/users";
import NotFoundPage from "./pages/NotFound";
import AboutPage from "./pages/about";
// const wrapRoutesWithLayout = (routes: RouteObject[]): RouteObject[] => {
//   return routes.map((route) => {
//     if (route.path === "/" || route.path === "/signup") {
//       return {
//         ...route,
//         element: <EmptyLayout>{route.element}</EmptyLayout>,
//       };
//     }

//     return {
//       ...route,
//       element: <MainLayout>{route.element}</MainLayout>,
//     };
//   });
// };

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<EmptyLayout />}>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard/users" element={<UsersPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
