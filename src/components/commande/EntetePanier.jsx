// pour les commandes
const EntetePanier = ({ total, onPayerClick }) => (
    <div className="cart-header">
        <div className="header-inner">
            <h2>Mon Panier</h2>
            <div className="header-actions">
                <div className="buttons">
                    <button
                        className="button is-solid accent-button raised"
                        onClick={onPayerClick}
                    >
                        Payer {total}€
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default EntetePanier;