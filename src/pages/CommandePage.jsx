import React, { useState } from 'react';
import EntetePanier from '../components/commande/EntetePanier';
import ArticlePanier from '../components/commande/ArticlePanier';
import PopupPaiement from '../components/commande/PopupPaiement';
// pour les commande
const donneesPanier = [
  { id: 1, nom: 'T-shirt Cool', img: 'assets/img/products/2.svg', prix: 29.99, remise: 0, quantite: 1 },
  { id: 2, nom: 'Short Militaire', img: 'assets/img/products/3.svg', prix: 39.99, remise: 5.00, quantite: 1 },
  { id: 3, nom: 'Sac à dos Cool', img: 'assets/img/products/4.svg', prix: 125.00, remise: 10.00, quantite: 1 },
  { id: 4, nom: 'Chaussures de Sport', img: 'assets/img/products/5.svg', prix: 89.99, remise: 0, quantite: 1 },
];

const CommandePage = () => {
  const [articles, setArticles] = useState(donneesPanier);
  const [afficherPopupPaiement, setAfficherPopupPaiement] = useState(false);

  const mettreAJourQuantite = (id, nouvelleQuantite) => {
    setArticles(articles.map(article => 
      article.id === id ? { ...article, quantite: nouvelleQuantite } : article
    ));
  };

  const supprimerArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  const calculerTotal = () => {
    return articles.reduce((total, article) => 
      total + (article.prix - article.remise) * article.quantite, 0
    ).toFixed(2);
  };

  const calculerSousTotal = () => {
    return articles.reduce((total, article) => 
      total + article.prix * article.quantite, 0
    ).toFixed(2);
  };

  const calculerRemiseTotal = () => {
    return articles.reduce((total, article) => 
      total + article.remise * article.quantite, 0
    ).toFixed(2);
  };

  return (
    <div className="is-white">
      <div className="view-wrapper">
        <div className="shop-wrapper">
          <div className="cart-container">
            <EntetePanier 
              total={calculerTotal()} 
              sousTotal={calculerSousTotal()}
              remiseTotal={calculerRemiseTotal()}
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

                    {articles.map((article) => (
                      <ArticlePanier 
                        key={article.id} 
                        article={article} 
                        mettreAJourQuantite={mettreAJourQuantite}
                        supprimerArticle={supprimerArticle}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {afficherPopupPaiement && (
        <PopupPaiement 
          total={calculerTotal()} 
          onFermer={() => setAfficherPopupPaiement(false)} 
        />
      )}
    </div>
  );
};

export default CommandePage;