import AnonymousLayout from "../layouts/AnonymousLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProfilPage from "../pages/ProfilPage.jsx";
import {renderRoutes} from "./generate-routes.jsx";
import PostPage from "../pages/PostPage";


export const routes = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: LoginPage,
                path: '/',
                isPublic: true,
            },
            {
                name: 'login',
                title: 'Login page',
                component: LoginPage,
                path: '/login',
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
                path: '/home'
            },
            {
                name: 'post',
                title: 'Post page',
                component: PostPage,
                path: '/post'
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
                        path: '/profile'
                    },
                ]
            }
        ]
    }
];

export const Routes = renderRoutes(routes);