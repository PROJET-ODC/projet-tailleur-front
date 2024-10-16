import React, { useState, useEffect } from 'react';
import EntetePanier from '../components/commande/EntetePanier';
import ArticlePanier from '../components/commande/ArticlePanier';
import PopupPaiement from '../components/commande/PopupPaiement';

const CommandePage = () => {
  const [articles, setArticles] = useState([]);
  const [afficherPopupPaiement, setAfficherPopupPaiement] = useState(false);
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    chargerDonneesPanier();
  }, []);

  const chargerDonneesPanier = () => {
    const donneesPanier = JSON.parse(localStorage.getItem('panier') || '[]');
    if (donneesPanier.length === 0) {
      // Initialiser avec des données par défaut si le panier est vide
      const donneesInitiales = [
        { id: 1, nom: 'T-shirt Cool', img: 'assets/img/products/2.svg', prix: 29.99, remise: 0, quantite: 1, utilisateurId: 1 },
        { id: 2, nom: 'Short Militaire', img: 'assets/img/products/3.svg', prix: 39.99, remise: 5.00, quantite: 1, utilisateurId: 1 },
        { id: 3, nom: 'Sac à dos Cool', img: 'assets/img/products/4.svg', prix: 125.00, remise: 10.00, quantite: 1, utilisateurId: 2 },
        { id: 4, nom: 'Chaussures de Sport', img: 'assets/img/products/5.svg', prix: 89.99, remise: 0, quantite: 1, utilisateurId: 2 },
        { id: 5, nom: 'T-shirt Métisé', img: 'assets/img/products/6.svg', prix: 19.99, remise: 3.00, quantite: 1, utilisateurId: 3 },
      ];
      localStorage.setItem('panier', JSON.stringify(donneesInitiales));
      setArticles(donneesInitiales);
    } else {
      setArticles(donneesPanier);
    }

    // Extraire les utilisateurs uniques
    const utilisateursUniques = [...new Set(donneesPanier.map(article => article.utilisateurId))];
    setUtilisateurs(utilisateursUniques);
  };

  const sauvegarderDonneesPanier = (nouveauxArticles) => {
    localStorage.setItem('panier', JSON.stringify(nouveauxArticles));
    setArticles(nouveauxArticles);
    
    // Mettre à jour la liste des utilisateurs
    const utilisateursUniques = [...new Set(nouveauxArticles.map(article => article.utilisateurId))];
    setUtilisateurs(utilisateursUniques);
  };

  const mettreAJourQuantite = (id, nouvelleQuantite) => {
    const nouveauxArticles = articles.map(article => 
      article.id === id ? { ...article, quantite: nouvelleQuantite } : article
    );
    sauvegarderDonneesPanier(nouveauxArticles);
  };

  const supprimerArticle = (id) => {
    const nouveauxArticles = articles.filter(article => article.id !== id);
    sauvegarderDonneesPanier(nouveauxArticles);
  };

  const calculerTotal = (utilisateurId) => {
    return articles
      .filter(article => article.utilisateurId === utilisateurId)
      .reduce((total, article) => 
        total + (article.prix - article.remise) * article.quantite, 0
      )
      .toFixed(2);
  };

  return (
    <div className="is-white" style={{ width: '100%', padding: '20px' }}>
      <div className="view-wrapper">
        <div className="shop-wrapper">
          <div className="cart-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {utilisateurs.map(utilisateurId => (
              <div key={utilisateurId}>
                <h2>Utilisateur {utilisateurId}</h2>
                <EntetePanier 
                  total={calculerTotal(utilisateurId)} 
                  onPayerClick={() => setAfficherPopupPaiement(true)} 
                />

                <div className="cart-content">
                  <div className="columns">
                    <div className="column is-8" style={{ width: '100%' }}>
                      <div className="flex-table">
                        <div className="flex-table-header">
                          <span className="product"><span>Produit</span></span>
                          <span className="quantity">Quantité</span>
                          <span className="price">Prix</span>
                          <span className="discount">Remise</span>
                          <span className="total">Total</span>
                          <span className="actions">Actions</span>
                        </div>

                        {articles
                          .filter(article => article.utilisateurId === utilisateurId)
                          .map((article) => (
                            <ArticlePanier 
                              key={article.id} 
                              article={article} 
                              mettreAJourQuantite={mettreAJourQuantite}
                              supprimerArticle={supprimerArticle}
                            />
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {afficherPopupPaiement && (
        <PopupPaiement 
          total={articles.reduce((total, article) => total + parseFloat(calculerTotal(article.utilisateurId)), 0).toFixed(2)} 
          onFermer={() => setAfficherPopupPaiement(false)} 
        />
      )}
    </div>
  );
};

export default CommandePage;