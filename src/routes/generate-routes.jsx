import flattenDeep from "lodash/flattenDeep";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage.jsx";

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
      return (
        <Route key={index} element={<Layout />}>
          <Route
            element={
              <ProtectedRoute isPublic={isPublic} isAuthorized={isAuthorized} />
            }
          >
            {subRoutes.map(({ component: Component, path, name, loader }) => {
              if (loader) {
                loader().then((data) => console.log(data));

                return (
                  Component &&
                  path && (
                    <Route
                      key={name}
                      element={<Component />}
                      path={path}
                      loader={loader}
                    />
                  )
                );
              }
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
