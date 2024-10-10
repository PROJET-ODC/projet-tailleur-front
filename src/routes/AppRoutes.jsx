// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarLeft from '../components/principal/sidebar/SidebarLeft';
import Articles from '../components/principal/sidebar/Articles';
import Approvisionnements from '../components/principal/sidebar/Approvisionnements';
import MesCommandes from '../components/principal/sidebar/MesCommandes';
import AjouterArticle from '../components/principal/sidebar/AjouterArticle';
import ProtectedRoute from './ProtectedRoute'; // Import du composant de route protégée



const AppRoutes = ({ isAuthorized }) => {
    return (
        <Router>
            <div className="app-container">
                <SidebarLeft />
                <Routes>
                    {/* Ajout de routes protégées */}
                    <Route element={<ProtectedRoute isAuthorized={isAuthorized} isPublic={false} />}>
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/approvisionnements" element={<Approvisionnements />} />
                        <Route path="/mes-commandes" element={<MesCommandes />} />
                        <Route path="/ajouter-article" element={<AjouterArticle />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default AppRoutes;
