import AnonymousLayout from "../layouts/AnonymousLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProfilPage from "../pages/ProfilPage.jsx";
import MesCommandes from '../components/principal/sidebar/MesCommandes';
import Articles from '../components/principal/sidebar/Articles';
import Approvisionnements from '../components/principal/sidebar/Approvisionnements';
import AjouterArticle from '../components/principal/sidebar/AjouterArticle';
import { renderRoutes } from "./generate-routes.jsx";
import NotFound from '../pages/NotFoundPage'; // Mettez à jour le chemin selon votre structure de projet

export const routes = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: LoginPage,
                path: '/login',
                isPublic: true,
            },
            {
                name: 'home', // Ajusté pour éviter les duplications
                title: 'Home page',
                component: HomePage,
                path: '/',
                isPublic: true,
            }
        ]
    },
    {
        layout: MainLayout,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: HomePage,
                path: '/home',
                exact: true
            },
            {
                name: 'users',
                title: 'Users',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'profil',
                        title: 'Profil',
                        hasSiderLink: true,
                        component: ProfilPage,
                        path: '/profile',
                        exact: true
                    }
                ]
            },
            {
                name: 'articles',
                title: 'Articles',
                component: Articles,
                path: '/articles',
                exact: true // Utilisé pour une correspondance exacte
            },
            {
                name: 'approvisionnements',
                title: 'Approvisionnements',
                component: Approvisionnements,
                path: '/approvisionnements',
                exact: true
            },
            {
                name: 'mes-commandes',
                title: 'Mes Commandes',
                component: MesCommandes,
                path: '/mes-commandes',
                exact: true
            },
            {
                name: 'ajouter-article',
                title: 'Ajouter Article',
                component: AjouterArticle,
                path: '/ajouter-article',
                exact: true
            },
            {
                name: 'not-found',
                title: '404 Not Found',
                component: NotFound, // Un composant pour la page 404
                path: '*'
            }
        ]
    }
];

export const Routes = renderRoutes(routes);
