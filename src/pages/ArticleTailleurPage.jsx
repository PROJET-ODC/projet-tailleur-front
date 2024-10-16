import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { getArticles } from '../api/articles';

function ArticleTailleurPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  // Récupérer les articles depuis le backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filtrer les articles en fonction du terme de recherche
  const filteredArticles = articles.filter(article => {
    const matchesLibelle = article.libelle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? article.categorie === selectedCategory : true;
    return matchesLibelle && matchesCategory;
  });

  // Affichage en fonction de l'état
  if (loading) {
    return <div>Chargement des articles...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  // Récupérer les catégories uniques
  const categories = [...new Set(articles.map(article => article.categorie))];

  return (
    <>
      <div className="search !w-[100%]">
        <div className="navbar-item !w-[100%]">
          <div id="global-search" className="control !w-[100%]">
            <div className="field !w-[100%]">
              <label>Rechercher un article</label>
              <div className="control has-icon !w-[100%]">
                <input
                  type="text"
                  className="input"
                  placeholder="saisir pour rechercher un article"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour le terme de recherche
                />
                <div className="form-icon">
                  <FaSearch className="text-[#e0dcdc]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Affichage des articles sous forme de cartes */}
      <div className="articles-list mt-5">
        <h2>Liste des Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles.map(article => (
            <div key={article.id} className="card border p-4 rounded shadow">
              <img src={article.image} className="w-full h-auto rounded" />
              <h1 className="text-lg font-bold">{article.libelle}</h1>
              <p>Unité: {article.unite}</p>
              <p>Couleur: {article.couleur_article?.couleur_id || 'Non spécifié'}</p>
              <p>Prix par unité: {article.prixUnite} fcfa</p>
              <p>Id Vendeur: {article.vendeur_id} fcfa</p>
              <p>Categorie: {article.categorie_id}</p>
              <p>Créé le: {new Date(article.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ArticleTailleurPage;
