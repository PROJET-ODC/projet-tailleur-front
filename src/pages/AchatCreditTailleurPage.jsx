import { useState } from "react";
import { acheterCredit } from "../api/acheterCredit"; // Import the API function

function AchatCreditTailleurPage() {
  const [montant, setMontant] = useState("");  // The amount in FCFA
  const [credits, setCredits] = useState(0);   // The calculated credits
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Function to calculate credits based on the FCFA input
  const calculateCredits = (montant) => {
    const creditRatio = 2 / 100;  // 2 credits = 100 FCFA, so ratio is 0.02
    return montant * creditRatio;
  };

  // Handle the submit action
  const handleSubmit = async () => {
    setMessage("");  // Reset previous message
    setError("");    // Reset previous error

    // Validate the input
    if (!montant || parseInt(montant) <= 0) {
      setError("Veuillez entrer un montant valide.");
      return;
    }

    try {
      const response = await acheterCredit(montant);  // Call the API function
      if (response.message) {
        setMessage(response.message);  // Display success message
      } else if (response.error) {
        setError(response.error);  // Handle error
      }
    } catch (err) {
      setError("Erreur lors de l'achat de crédit.");  // Handle unexpected errors
    }
  };

  // Update credits when montant changes
  const handleMontantChange = (e) => {
    const newMontant = e.target.value;
    setMontant(newMontant);
    setCredits(calculateCredits(newMontant));  // Calculate credits based on montant
  };

  return (
    <div className="left-header">
      <div className="header-inner">
        <div className="separator"></div>
        <div className="title-wrap">
          <h3 className="payment-title">Payer vos crédits</h3>
          <p className="payment-subtitle">Entrer le montant</p>
        </div>
      </div>
      <div className="header-coupon">
        <div className="field is-grouped">
          <div className="control">
            <input
              type="number"
              className="input"
              placeholder="Montant en FCFA"
              value={montant}
              onChange={handleMontantChange}  // Update montant and credits
            />
          </div>
          <div className="control">
            <button
              className="button is-solid primary-button raised"
              onClick={handleSubmit}  // Trigger the API call
            >
              Acheter
            </button>
          </div>
        </div>
        {/* Show message or error */}
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="header-foot">
        <span className="label">Total crédit</span>
        <span className="amount" data-currency="USD">
          {credits.toFixed(2)} crédits (pour {montant || "0"} FCFA)
        </span>
      </div>
    </div>
  );
}

export default AchatCreditTailleurPage;
