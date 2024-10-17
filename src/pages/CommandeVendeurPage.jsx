import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getCommandeVendeur } from "../api/commandeVendeur";

function CommandeVendeurPage() {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    const fetchCommandes = async () => {
      const result = await getCommandeVendeur();
      if (result && result.status === "OK") {
        setCommandes(result);
      } else {
        console.error("Erreur lors de la récupération des commandes", result.message);
      }
    };

    fetchCommandes();
  }, []);

  return (
    <>
      <div className="search !w-[100%]">
        <div className="navbar-item !w-[100%]">
          <div
            id="global-search"
            className="flex flex-wrap gap-3 control !w-[100%]"
          >
            <div className="field !w-[40%]">
              <label>Rechercher un article</label>
              <div className="control has-icon">
                <input
                  type="text"
                  className="input"
                  placeholder="saisir pour rechercher un article"
                />
                <div className="form-icon">
                  <FaSearch className="text-[#e0dcdc]" />
                </div>
              </div>
            </div>
            <div className="field !w-[40%]">
              <label>Rechercher un article</label>
              <div className="control has-icon">
                <input
                  type="text"
                  className="input"
                  placeholder="saisir pour rechercher un article"
                />
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
          <span className="product">
            <span>Product</span>
          </span>
          <span className="quantity">Libelle</span>
          <span className="price">Quantité</span>
          <span className="discount">Numéro commande</span>
          <span className="total">Montant Total</span>
        </div>

        {commandes.map((commande, index) => (
          <div key={index} className="flex-table-item">
            <div className="product">
              <img src={commande.image} alt={commande.libelle} />
              <span className="product-name">{commande.libelle}</span>
            </div>
            <div className="quantity">
              <span className="has-price">{commande.qte}</span>
            </div>
            <div className="price">
              <span className="has-price">{commande.numero}</span>
            </div>
            <div className="discount">
              <span className="has-price">{commande.montantTotal}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommandeVendeurPage;
