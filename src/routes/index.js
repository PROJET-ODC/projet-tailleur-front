import AnonymousLayout from "../layouts/AnonymousLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CommandePage from "../pages/CommandePage.jsx";
import { renderRoutes } from "./generate-routes.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import NotFound from "../pages/NotFoundPage"; // Mettez à jour le chemin selon votre structure de projet
import ProfilePage from "../components/profile/ProfilePage.jsx";
import HeadLayout from "../layouts/HeadLayout.jsx";
import ProfilePageIdentifiant from "../components/profileIdentifiant/ProfilePageIdentifiant.jsx";

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
        exact: true,
      },
      {
        name: "users",
        title: "Users",
        hasSiderLink: true,
        routes: [],
      },
      {
        name: "not-found",
        title: "404 Not Found",
        component: NotFound, // Un composant pour la page 404
        path: "*",
      },
    ],
  },
  {
    layout: HeadLayout,
    routes: [
      {
        name: "profile", // Route pour le profil de l'utilisateur connecté
        title: "Profil",
        hasSiderLink: true,
        component: ProfilePage,
        path: "/profile",
        exact: true,
      },
      {
        name: "profile-id", // Route pour le profil d'un utilisateur spécifique par ID
        title: "Profil Identifiant",
        hasSiderLink: true,
        component: ProfilePageIdentifiant,
        path: "/profile/:id",
        exact: true,
      },
      {
        name: "commande",
        title: "Commande page",
        component: CommandePage,
        path: "/commande",
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
