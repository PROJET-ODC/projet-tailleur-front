import { useState } from "react";
// pour les commande
const PopupPaiement = ({ total, showPopup }) => {
  const [methode, setMethode] = useState("");
  const [mode, setMode] = useState("");
  const [cvv, setCvv] = useState("");
  const [paiement, setPaiement] = useState("");
  const [totalPaiement, setTotalPaiement] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous traiteriez normalement le paiement
    console.log("Traitement du paiement...");
    showPopup();
  };

  const handleChangeMethode = (e) => {
    setMethode(e.target.value);
    if (methode === "Account") {
      setTotalPaiement(total / 2);
    } else {
      setTotalPaiement(total);
    }
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={showPopup}></div>
      <div className="modal-content">
        <div className="box">
          <h2 className="title is-4">Détails du Paiement</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            {/* Mode de paiement */}
            <div className="field col-span-1">
              <label className="label">Mode de paiement</label>
              <div className="control">
                <select
                  className="select w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={methode}
                  onChange={(e) => handleChangeMethode(e)}
                >
                  <option value="Account">Account</option>
                  <option value="Total">Total</option>
                </select>
              </div>
            </div>

            {/* Payment method */}
            <div className="field col-span-1">
              <label className="label">Mode de transaction</label>
              <div className="control">
                <select
                  className="select w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                >
                  <option value="Wave">Wave</option>
                  <option value="Orange Money">Orange Money</option>
                </select>
              </div>
            </div>

            {/* Telephone */}
            <div className="field col-span-2">
              <label className="label">Téléphone</label>
              <div className="control">
                <input
                  type="text"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Veuillez saisir votre numéro"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="field col-span-2">
              <div className="control">
                <button className="button is-primary w-full" type="submit">
                  Payer {totalPaiement} FCFA
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="fermer"
        onClick={showPopup}
      ></button>
    </div>
  );
};

export default PopupPaiement;
