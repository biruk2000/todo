import { useRoutes, RouteObject } from "react-router-dom";
import EmptyLayout from "./layouts/emptyLayout";
import routes from "~react-pages";
import MainLayout from "./layouts/mainLayout";
const wrapRoutesWithLayout = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    if (route.path === "/" || route.path === "/signup") {
      return {
        ...route,
        element: <EmptyLayout>{route.element}</EmptyLayout>,
      };
    }

    return {
      ...route,
      element: <MainLayout>{route.element}</MainLayout>,
    };
  });
};

const Routes = () => {
  return useRoutes(wrapRoutesWithLayout(routes));
};

export default Routes;
