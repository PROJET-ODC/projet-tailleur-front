import React from 'react';
import Loader from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/Loader.jsx';
import CartHeader from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/CartHeader.jsx';
import CartList from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/CartList.jsx';

const FaShoppingCart = () => {
  return (
    <div className="navbar-item is-cart">
      <div className="cart-button">
        <i data-feather="shopping-cart"></i>
        <div className="cart-count"></div>
      </div>

      <div className="shopping-cart">
        <div className="cart-inner">
          <Loader />

          {/* En-tête du panier */}
          <CartHeader total="$193.00" />

          {/* Liste des articles */}
          <CartList />

          <a href="#" className="button primary-button is-raised">Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default FaShoppingCart;
