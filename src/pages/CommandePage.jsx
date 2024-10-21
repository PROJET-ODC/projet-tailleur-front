import React, { useState, useEffect } from "react";
import EntetePanier from "../components/commande/EntetePanier";
import ArticlePanier from "../components/commande/ArticlePanier";
import PopupPaiement from "../components/commande/PopupPaiement";
import { groupByTailleurId } from "../utils/others";

// Fonction pour regrouper et combiner les articles par leur ID
const groupAndCombineArticles = (articles) => {
  const combinedArticles = {};

  articles.forEach((article) => {
    const articleId = article.post.id;
    if (combinedArticles[articleId]) {
      // Si l'article existe déjà, additionne les quantités
      combinedArticles[articleId].quantity += parseInt(article.quantity);
    } else {
      // Sinon, ajoute l'article au nouvel objet
      combinedArticles[articleId] = { ...article };
    }
  });

  // Retourne les articles combinés sous forme de tableau
  return Object.values(combinedArticles);
};

const CommandePage = () => {
  const [panier, setPanier] = useState(null);
  const [showPopupPaiement, setShowPopupPaiement] = useState(false);
  const [popUpTotal, setPopUpTotal] = useState(0);
  const [currentTailleurId, setCurrentTailleurId] = useState(null);
  const [accountId, setAccountId] = useState(null);

  useEffect(() => {
    const storedPanier = JSON.parse(localStorage.getItem("panier"));
    if (storedPanier) {
      const combinedArticles = groupAndCombineArticles(storedPanier);
      setPanier(groupByTailleurId(combinedArticles));
    }
    setAccountId(1); // Remplacez ceci par la logique pour obtenir l'ID du compte
  }, []);

  const calculerTotal = (tailleur_id) => {
    const tailleurPanier = panier.find(group => group[0].post.tailleur_id === tailleur_id);
    if (tailleurPanier) {
      return tailleurPanier.reduce(
        (total, article) => total + parseInt(article.post.price) * parseInt(article.quantity),
        0
      );
    }
    return 0;
  };

  const mettreAJourQuantite = (id_post, quantity) => {
    const panierActu = JSON.parse(localStorage.getItem("panier"));
    if (!panierActu) return;

    const updatePanier = panierActu.map((article) => 
      article.post.id === id_post ? { ...article, quantity } : article
    );

    const combinedArticles = groupAndCombineArticles(updatePanier);
    setPanier(groupByTailleurId(combinedArticles));
    localStorage.setItem("panier", JSON.stringify(updatePanier));
  };

  const supprimerArticle = (id_post) => {
    const panierActu = JSON.parse(localStorage.getItem("panier"));
    if (!panierActu) return;

    const updatePanier = panierActu.filter((article) => article.post.id !== id_post);

    const combinedArticles = groupAndCombineArticles(updatePanier);
    setPanier(groupByTailleurId(combinedArticles));
    localStorage.setItem("panier", JSON.stringify(updatePanier));
  };

  const showPopup = (tailleur_id) => {
    setCurrentTailleurId(tailleur_id);
    setPopUpTotal(calculerTotal(tailleur_id));
    setShowPopupPaiement(true);
  };

  const closePopup = () => {
    setShowPopupPaiement(false);
    setCurrentTailleurId(null);
  };

  const incrementerQuantite = (id_post) => {
    const panierActu = JSON.parse(localStorage.getItem("panier"));
    if (!panierActu) return;

    const updatePanier = panierActu.map((article) => {
      if (article.post.id === id_post) {
        return { ...article, quantity: article.quantity + 1 };
      }
      return article;
    });

    const combinedArticles = groupAndCombineArticles(updatePanier);
    setPanier(groupByTailleurId(combinedArticles));
    localStorage.setItem("panier", JSON.stringify(updatePanier));
  };

  const decrementerQuantite = (id_post) => {
    const panierActu = JSON.parse(localStorage.getItem("panier"));
    if (!panierActu) return;

    const updatePanier = panierActu.map((article) => {
      if (article.post.id === id_post) {
        const newQuantity = article.quantity > 1 ? article.quantity - 1 : 1; // Assurez-vous que la quantité ne soit pas inférieure à 1
        return { ...article, quantity: newQuantity };
      }
      return article;
    });

    const combinedArticles = groupAndCombineArticles(updatePanier);
    setPanier(groupByTailleurId(combinedArticles));
    localStorage.setItem("panier", JSON.stringify(updatePanier));
  };

  return (
    <div className="is-white" style={{ width: "100%", padding: "20px" }}>
      <div className="view-wrapper">
        <div className="shop-wrapper">
          <div className="cart-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {panier && Object.values(panier).map((commandeByTailleur, index) => (
              <div key={index}>
                <h2>
                  Tailleur : {commandeByTailleur[0].post.user.firstname}
                </h2>

                <EntetePanier
                  showPopup={() => showPopup(commandeByTailleur[0].post.tailleur_id)}
                />

                <div className="cart-content">
                  <div className="columns">
                    <div className="column is-8" style={{ width: "100%" }}>
                      <div className="flex-table">
                        <div className="flex-table-header">
                          <span className="discount">Files</span>
                          <span className="discount">Libelle</span>
                          <span className="discount">Color</span>
                          <span className="discount">Taille</span>
                          <span className="discount">Quantité</span>
                          <span className="discount">Prix</span>
                          <span className="discount">Total</span>
                          <span className="discount">Actions</span>
                        </div>

                        {commandeByTailleur.map((article) => (
                          <ArticlePanier
                            key={article.post.id}
                            article={article}
                            mettreAJourQuantite={mettreAJourQuantite}
                            supprimerArticle={supprimerArticle}
                            incrementerQuantite={incrementerQuantite}
                            decrementerQuantite={decrementerQuantite}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="!text-end button !float-right mt-[-20px] !bg-slate-100">
                    <span>Total : </span>
                    <span>{calculerTotal(commandeByTailleur[0].post.tailleur_id)} fcfa</span>
                  </div>
                </div>
              </div>
            ))}
            {showPopupPaiement && (
              <PopupPaiement 
                showPopup={closePopup} 
                total={popUpTotal}  
                panier={panier.find(group => group[0].post.tailleur_id === currentTailleurId)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandePage;
