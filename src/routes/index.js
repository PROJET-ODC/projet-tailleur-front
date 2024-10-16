import AnonymousLayout from "../layouts/AnonymousLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProfilPage from "../pages/ProfilPage.jsx";
import { renderRoutes } from "./generate-routes.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import NotFound from "../pages/NotFoundPage"; // Mettez à jour le chemin selon votre structure de projet
import ChatPage from "../pages/ChatPage";

import DashboardTailleur from "../layouts/DashboardTailleur.jsx";
import CommandeTailleurPage from "../pages/CommandeTailleurPage.jsx";
import ArticleTailleurPage from "../pages/ArticleTailleurPage.jsx";
import ApproTailleurPage from "../pages/ApproTailleurPage.jsx";


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
      {
        name: "messages",
        title: "Messages",
        component: ChatPage,
        path: "/messages", 
        exact: true,
        isPublic: true,  
      },
    ],
  },
  {
    layout: DashboardTailleur,
    routes: [
      {
        name: "tailleur",
        title: "Tailleurs",
        hasSiderLink: true,
        routes: [
          {
            name: "articles",
            title: "Articles",
            hasSiderLink: true,
            component: ArticleTailleurPage,
            path: "/tailleur/articles",
            exact: true,
          },
          {
            name: "commande",
            title: "Commandes",
            hasSiderLink: true,
            component: ApproTailleurPage,
            path: "/tailleur/appro",
            exact: true,
          },
          {
            name: "commande",
            title: "Commandes",
            hasSiderLink: true,
            component: CommandeTailleurPage,
            path: "/tailleur/commande",
            exact: true,
          },
        ],
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
        exact: true,
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
            exact: true,
          },
        ],
      },
      {
        name: "not-found",
        title: "404 Not Found",
        component: NotFound, // Un composant pour la page 404
        path: "*",
      },

    ],
    
  },

];

export const Routes = renderRoutes(routes);
