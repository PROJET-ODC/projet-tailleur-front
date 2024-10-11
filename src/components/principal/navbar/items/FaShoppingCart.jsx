import Loader from "./itemsComponents/sousComponentitems/Loader";
import CartHeader from "./itemsComponents/sousComponentitems/CartHeader";
import CartList from "./itemsComponents/sousComponentitems/CartList";

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

          <a href="#" className="button primary-button is-raised">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaShoppingCart;
