// pour les commandes
const EntetePanier = ({ total, showPopup }) => (
    <div className="cart-header">
        <div className="header-inner">
            <h2>Mon Panier</h2>
            <div className="header-actions">
                <div className="buttons">
                    <button
                        className="button is-solid accent-button raised"
                        onClick={showPopup}
                    >
                        Payer {total}cfa
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default EntetePanier;