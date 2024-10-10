// src/components/sidebar/AjouterArticle.jsx
import React, { useState } from 'react';
import { ajouterArticle } from '../../../api/articles';


const AjouterArticle = () => {
    const [article, setArticle] = useState({
        libelle: '',
        categorie: '',
        prix: 0,
        quantite: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle({ ...article, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ajouterArticle(article);
        setArticle({ libelle: '', categorie: '', prix: 0, quantite: 0 });
    };

    return (
        <div>
            <h2>Ajouter un Article</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="libelle"
                    placeholder="Libellé"
                    value={article.libelle}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="categorie"
                    placeholder="Catégorie"
                    value={article.categorie}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="prix"
                    placeholder="Prix Unitaire"
                    value={article.prix}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="quantite"
                    placeholder="Quantité"
                    value={article.quantite}
                    onChange={handleChange}
                />
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    );
};

export default AjouterArticle;
