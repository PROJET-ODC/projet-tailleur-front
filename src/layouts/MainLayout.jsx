// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import React from 'react';
import SidebarLeft from '../components/principal/sidebar/Sidebar';
import SidebarRight from '../components/principal/sidebar/StoriesSidebar';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Espace pour la Navbar */}
            <div className="h-16 bg-gray-200"></div> {/* 16 = hauteur de la navbar (taille ajustable) */}
            <div className="flex flex-1">
                <SidebarLeft /> {/* Barre latérale gauche */}
                <div className="flex-1 mx-4 p-4"> {/* Contenu principal avec espacement */}
                    {children}
                </div>
                <StoriesSidebar /> {/* Barre latérale droite */}
            </div>
        </div>
    );
};

export default MainLayout;
