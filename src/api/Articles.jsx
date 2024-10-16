// src/components/sidebar/Articles.jsx
import React, { useEffect, useState } from 'react';
import { getArticles } from '../../../api/articles'; // Une fonction fictive pour récupérer les articles

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Charger les articles à partir de l'API
        getArticles().then(data => setArticles(data));
    }, []);

    return (
        <div>
            <h2>Liste des Articles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Libellé</th>
                        <th>Catégorie</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id}>
                            <td>{article.libelle}</td>
                            <td>{article.categorie}</td>
                            <td>{article.prix}</td>
                            <td>{article.quantite}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Articles;
