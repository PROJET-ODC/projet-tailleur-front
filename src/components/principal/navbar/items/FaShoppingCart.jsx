import Loader from "./itemsComponents/sousComponentitems/Loader";
import CartHeader from "./itemsComponents/sousComponentitems/CartHeader";
import CartList from "./itemsComponents/sousComponentitems/CartList";
import { Link } from "react-router-dom";

const FaShoppingCart = ({ cart }) => {
  const total = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + (parseFloat(item.price) || 0), 0)
    : 0; // Vérifiez si cart est un tableau

  return (
    <Link to="/commande" className="navbar-item is-cart">
      <div className="cart-button">
        <i data-feather="shopping-cart"></i>
        <div className="cart-count">1</div>
      </div>

      {/* <div className="shopping-cart">
        <div className="cart-inner">
          <Loader />
          <CartHeader total={`$${total.toFixed(2)}`} />
          <CartList items={cart} />
          <a href="#" className="button primary-button is-raised">
            Checkout
          </a>
        </div>
      </div> */}
    </Link>
  );
};

export default FaShoppingCart;
