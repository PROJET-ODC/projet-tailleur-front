import flattenDeep from "lodash/flattenDeep";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import { getFeedsInitData } from "../api/clients.js";

const generateFlattenRoutes = (routes) => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

export const renderRoutes = (mainRoutes) => {
  const Routes = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);
      const isPublic = subRoutes[0].isPublic ?? false;
      console.log();
      return (
        <Route key={index} element={<Layout />}>
          <Route
            element={
              <ProtectedRoute isPublic={isPublic} isAuthorized={isAuthorized} />
            }
          >
            {subRoutes.map(({ component: Component, path, name }) => {
              // if (name == "home") {
              //   return (
              //     Component &&
              //     path && (
              //       <Route
              //         key={name}
              //         element={<Component />}
              //         path={path}
              //         loader={getFeedsInitData}
              //       />
              //     )
              //   );
              // }

              return (
                Component &&
                path && <Route key={name} element={<Component />} path={path} />
              );
            })}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      );
    });
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};
