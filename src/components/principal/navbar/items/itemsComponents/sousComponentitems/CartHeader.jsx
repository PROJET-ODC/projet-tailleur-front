const CartHeader = ({ total }) => {
  return (
    <div className="shopping-cart-header">
      <a href="ecommerce-cart.html" className="cart-link">View Cart</a>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">{total}</span>
      </div>
    </div>
  );
};

export default CartHeader;
