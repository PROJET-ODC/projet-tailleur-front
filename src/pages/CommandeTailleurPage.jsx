import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { getCommandes } from "../api/Commande";

function CommandeTailleurPage() {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    const fetchCommandes = async () => {
      const data = await getCommandes();
      if (data.status === "OK") {
        setCommandes(data.commandes);
      } else {
        console.error(data.message);
      }
    };

    fetchCommandes();
  }, []);

  return (
    <>
      <div className="search !w-[100%]">
        <div className="navbar-item !w-[100%]">
          <div id="global-search" className="flex flex-wrap gap-3 control !w-[100%]">
            <div className="field !w-[40%]">
              <label>Rechercher un article</label>
              <div className="control has-icon">
                <input type="text" className="input" placeholder="saisir pour rechercher un article" />
                <div className="form-icon">
                  <FaSearch className="text-[#e0dcdc]" />
                </div>
              </div>
            </div>
            <div className="field !w-[40%]">
              <label>Rechercher un article</label>
              <div className="control has-icon">
                <input type="text" className="input" placeholder="saisir pour rechercher un article" />
                <div className="form-icon">
                  <FaSearch className="text-[#e0dcdc]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-table">
        <div className="flex-table-header">
          <span className="product">Product</span>
          <span className="quantity">Quantité</span>
          <span className="price">Montant</span>
          <span className="discount">Taille</span>
          <span className="total">Total</span>
        </div>
        {commandes.map((commande) => (
          <div className="flex-table-item" key={commande.id}>
            <div className="product">
              <img src={commande.post.files} alt={commande.post.title} />
              <span className="product-name">{commande.post.title}</span>
            </div>
            <div className="quantity">
              <span className="has-price">{commande.qte}</span>
            </div>
            <div className="price">
              <span className="has-price">{commande.paiement[0]?.montant}</span>
            </div>
            <div className="discount">
              <span className="has-price">{commande.taille}</span>
            </div>
            <div className="total">
              <span className="has-price">{commande.qte * commande.paiement[0]?.montant}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommandeTailleurPage;
