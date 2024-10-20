import React, { useState, useEffect } from "react";
import EntetePanier from "../components/commande/EntetePanier";
import ArticlePanier from "../components/commande/ArticlePanier";
import PopupPaiement from "../components/commande/PopupPaiement";
import { groupByTailleurId } from "../utils/others";
import { forEach } from "lodash";

const CommandePage = () => {
  const [panier, setPanier] = useState(null);
  const [showPopupPaiement, setShowPopupPaiement] = useState(false);
  const [popUpTotal, setPopUpTotal] = useState(0);

  useEffect(() => {
    const storedPanier = JSON.parse(localStorage.getItem("panier"));
    if (storedPanier) {
      setPanier(groupByTailleurId(storedPanier));
    }
  }, []);

  console.log(panier);

  const calculerTotal = (tailleur_id) => {
    for (let i = 0; i < panier.length; i++) {
      const utilisateurId = panier[i][0].post.tailleur_id;

      if (tailleur_id === utilisateurId) {
        const sommeTotal = panier[i].reduce(
          (total, article) =>
            total + parseInt(article.post.price) * parseInt(article.quantity),
          0
        );
        console.log("total :", sommeTotal);

        return sommeTotal;
      }
    }
  };

  const mettreAJourQuantite = (id_post, quantity) => {
    const panierActu = JSON.parse(localStorage.getItem("panier"));
    if (!panierActu) {
      return;
    }
    console.log(2);

    const updatePanier = panierActu.map((article) => {
      if (article.post.id === id_post) {
        console.log(id_post);

        article.quantity = quantity;
        return article;
      }
      return article;
    });
    console.log(updatePanier);

    setPanier(groupByTailleurId(updatePanier));

    localStorage.setItem("panier", JSON.stringify(updatePanier));
  };

  // const supprimerArticle = (value) => {
  //   console.log(value);
  // };
  
  const supprimerArticle = (id_post) => {
    const panierActu = JSON.parse(localStorage.getItem("panier"));
    if (!panierActu) return;

    // Filtrer l'article à supprimer
    const updatedPanier = panierActu.filter(article => article.post.id !== id_post);

    // Mettre à jour le localStorage
    localStorage.setItem("panier", JSON.stringify(updatedPanier));

    // Mettre à jour l'état du panier
    setPanier(groupByTailleurId(updatedPanier));
  };

  const showPopup = (tailleur_id) => {
    setShowPopupPaiement((pr) => !pr);
    setPopUpTotal(calculerTotal(tailleur_id));
  };

  return (
    <div className="is-white" style={{ width: "100%", padding: "20px" }}>
      <div className="view-wrapper">
        <div className="shop-wrapper">
          <div
            className="cart-container"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            {panier &&
              Object.values(panier).map((commandeByTailleur, index) => (
                <div key={index}>
                  <h2>
                    Tailleur : {commandeByTailleur[0].post.user.firstname}
                  </h2>

                  <EntetePanier
                    showPopup={() =>
                      showPopup(commandeByTailleur[0].post.tailleur_id)
                    }
                  />

                  <div className="cart-content">
                    <div className="columns">
                      <div className="column is-8" style={{ width: "100%" }}>
                        <div className="flex-table">
                          <div className="flex-table-header">
                            <span className="discount">Files</span>
                            <span className="discount">
                              <span>Libelle</span>
                            </span>
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
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="!text-end  button !float-right mt-[-20px] !bg-slate-100">
                      <span className="discount ">Total :</span>
                      <span className="discount">
                        {calculerTotal(commandeByTailleur[0].post.tailleur_id)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            {showPopupPaiement && (
              <PopupPaiement showPopup={showPopup} total={popUpTotal} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandePage;
