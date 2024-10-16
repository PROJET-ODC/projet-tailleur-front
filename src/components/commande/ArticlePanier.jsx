import React from 'react';
// pour les commandes
const ArticlePanier = ({ article, mettreAJourQuantite }) => (
  <div className="flex-table-item">
    <div className="product">
      <img src={article.img} alt={article.nom} />
      <span className="product-name">{article.nom}</span>
    </div>
    <div className="quantity has-spinner" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="spinner">
        <button className="remove" onClick={() => mettreAJourQuantite(article.id, Math.max(0, article.quantite - 1))}>
          <i data-feather="minus"></i>
        </button>
        <span className="value">{article.quantite}</span>
        <button className="add" onClick={() => mettreAJourQuantite(article.id, article.quantite + 1)}>
          <i data-feather="plus"></i>
        </button>
      </div>
    </div>
    <div className="price">
      <span className="has-price">{article.prix.toFixed(2)}€</span>
    </div>
    <div className="discount">
      <span className="has-price">0,00€</span>
    </div>
    <div className="total">
      <span className="has-price">{(article.prix * article.quantite).toFixed(2)}€</span>
    </div>
  </div>
);

export default ArticlePanier;