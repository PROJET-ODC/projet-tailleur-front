import React from 'react';
import { Link } from 'react-router-dom';
import { FaThLarge } from 'react-icons/fa'; // Icône pour le tableau de bord


const ButtonDashboard = () => {
    return (
        <Link to="/tailleur" className="navbar-item">
            <button className="dashboard-button">
                <FaThLarge size={26} />
            </button>
        </Link>
    );
};

export default ButtonDashboard;
