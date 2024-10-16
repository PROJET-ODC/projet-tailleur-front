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
import FollowerPage from "../components/Friends/FollowerPage.jsx";
import PhotosPage from "../components/PhotosPage/PhotoPage.jsx";
import ChatPage from "../pages/ChatPage";

import DashboardTailleur from "../layouts/DashboardTailleur.jsx";
import CommandeTailleurPage from "../pages/CommandeTailleurPage.jsx";
import ArticleTailleurPage from "../pages/ArticleTailleurPage.jsx";
import ApproTailleurPage from "../pages/ApproTailleurPage.jsx";
import DashboardVendeur from "../layouts/DashboardVendeur.jsx";
import ArticleVendeurPage from "../pages/ArticleVendeurPage.jsx";
import CommandeVendeurPage from "../pages/CommandeVendeurPage.jsx";


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
            name: "DashboardTailleur",
            title: "DashboardTailleur",
            component: DashboardTailleur,
            path: "/tailleur",
            exact: true,
          },
          {
            name: "articles",
            title: "Articles",
            hasSiderLink: true,
            component: ArticleTailleurPage,
            path: "/tailleur/articles",
            exact: true,
          },
          {
            name: "appro",
            title: "Approvisionnement",
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
    layout: DashboardVendeur,
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
            component: ArticleVendeurPage,
            path: "/vendeur/articles",
            exact: true,
          },
          {
            name: "commande",
            title: "Commandes",
            hasSiderLink: true,
            component: CommandeVendeurPage,
            path: "/vendeur/commande",
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
      {
        name: "Followers",
        title: "follwers page",
        component: FollowerPage,
        path: "/followers",
      },
      {
        name: "Followers",
        title: "follwers page",
        component: PhotosPage,
        path: "/photos",
      },
    ],
  },
];

export const Routes = renderRoutes(routes);

