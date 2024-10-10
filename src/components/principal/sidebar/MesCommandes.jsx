// src/components/sidebar/MesCommandes.jsx
import React, { useEffect, useState } from 'react';
import { getCommandes } from '../../../api/commandes'; // Fonction fictive pour récupérer les commandes

const MesCommandes = () => {
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        getCommandes().then(data => setCommandes(data));
    }, []);

    return (
        <div>
            <h2>Mes Commandes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Commande</th>
                        <th>Etat</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {commandes.map(commande => (
                        <tr key={commande.id}>
                            <td>{commande.libelle}</td>
                            <td>{commande.etat}</td>
                            <td>{commande.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MesCommandes;
