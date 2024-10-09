import AnonymousLayout from "../layouts/AnonymousLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProfilPage from "../pages/ProfilPage.jsx";
import { renderRoutes } from "./generate-routes.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/",
        isPublic: true,
      },
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/login",
        isPublic: true,
      },
      {
        name: "register",
        title: "Register page",
        component: RegisterPage,
        path: "/register",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "home",
        title: "Home page",
        component: HomePage,
        path: "/home",
      },
      {
        name: "users",
        title: "Users",
        hasSiderLink: true,
        routes: [
          {
            name: "profil",
            title: "Profil",
            hasSiderLink: true,
            component: ProfilPage,
            path: "/profile",
          },
        ],
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
