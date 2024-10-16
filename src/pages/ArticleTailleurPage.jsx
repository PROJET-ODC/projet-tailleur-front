import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { getArticles } from '../api/articles'; // Assurez-vous que le chemin est correct

function ArticleTailleurPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Récupérer les articles depuis le backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filtrer les articles en fonction du terme de recherche
  const filteredArticles = articles.filter(article => {
    const matchesLibelle = article.libelle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLibelle;
  });

  // Affichage en fonction de l'état
  if (loading) {
    return <div>Chargement des articles...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

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
      <div id="products-tab" className="store-tab-pane is-active mt-20">
        <div className="columns is-multiline">
          {filteredArticles.map((article) => {
            // Extraire l'URL de l'image
            const imageUrl = Object.keys(article.image)[0]; // Récupère la première clé de l'objet image

            return (
              <div className="column is-one-fifth-fullhd is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet is-half-mobile ">
            <div className="product-card bg-white border p-1" data-name="Spring Red Dress" data-price="44.00" data-colors="true" data-variants="true" data-path="/src/assets/img/products/1">
                  <div className="product-image">
                    <img
                      src={imageUrl}
                      alt={article.libelle}
                      className="w-full h-48 rounded"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'url_de_l_image_par_defaut.jpg'; }} // Gestion d'erreur d'image
                    />
                  </div>
                  <div className="product-info mt-2">
                    <h3 className="text-lg font-bold">{article.libelle}</h3>
                    <p>Unité: {article.article_unite[0]?.unite_id || 'Non spécifié'}</p>
                    <p>Id Vendeur: {article.vendeur_id}</p>
                    <p>Catégorie: {article.categorie_id}</p>
                  </div>
                  <div className="product-actions flex justify-between items-center mt-4">
                    <div class="left">
                      <i data-feather="heart"></i>
                      <span>147</span>
                    </div>
                    <div class="right">
                      <a class="button is-solid accent-button raised">
                        <i data-feather="shopping-cart"></i>
                        <span>{ article.article_unite[0]?.prix} fcfa</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ArticleTailleurPage;
