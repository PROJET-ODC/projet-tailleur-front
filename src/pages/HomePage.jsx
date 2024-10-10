// src/pages/HomePage.jsx
import React from 'react';
import StoriesSidebar from '../components/principal/sidebar/StoriesSidebar';
import SidebarLeft from '../components/principal/sidebar/Sidebar';

const HomePage = () => {
    return (
        <div className="app-container">
            {/* Sidebar gauche - Articles */}
            <SidebarLeft />

            <div className="main-content">
                {/* Ajoutez d'autres contenus spécifiques à la page d'accueil ici */}
            </div>
        </div>
    );
};

export default HomePage;
