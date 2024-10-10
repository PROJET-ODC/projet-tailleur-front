// src/components/sidebar/Approvisionnements.jsx
import React, { useEffect, useState } from 'react';
import { getApprovisionnements } from '../../../api/approvisionnements'; // Fonction fictive pour récupérer les approvisionnements

const Approvisionnements = () => {
    const [approvisionnements, setApprovisionnements] = useState([]);

    useEffect(() => {
        getApprovisionnements().then(data => setApprovisionnements(data));
    }, []);

    return (
        <div>
            <h2>Liste des Approvisionnements</h2>
            <table>
                <thead>
                    <tr>
                        <th>Article</th>
                        <th>Quantité</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {approvisionnements.map(approv => (
                        <tr key={approv.id}>
                            <td>{approv.article}</td>
                            <td>{approv.quantite}</td>
                            <td>{approv.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Approvisionnements;
