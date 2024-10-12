import React, { useState } from 'react';
// pour les commande
const PopupPaiement = ({ total, onFermer }) => {
  const [numeroCarte, setNumeroCarte] = useState('');
  const [dateExpiration, setDateExpiration] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous traiteriez normalement le paiement
    console.log('Traitement du paiement...');
    onFermer();
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onFermer}></div>
      <div className="modal-content">
        <div className="box">
          <h2 className="title is-4">Détails du Paiement</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Numéro de Carte</label>
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  value={numeroCarte} 
                  onChange={(e) => setNumeroCarte(e.target.value)}
                  placeholder="1234 5678 9012 3456" 
                  required 
                />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Date d'Expiration</label>
                  <div className="control">
                    <input 
                      className="input" 
                      type="text" 
                      value={dateExpiration} 
                      onChange={(e) => setDateExpiration(e.target.value)}
                      placeholder="MM/AA" 
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">CVV</label>
                  <div className="control">
                    <input 
                      className="input" 
                      type="text" 
                      value={cvv} 
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123" 
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">Payer {total}€</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="fermer" onClick={onFermer}></button>
    </div>
  );
};

export default PopupPaiement;