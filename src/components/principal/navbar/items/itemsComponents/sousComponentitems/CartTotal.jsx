import React from 'react';

const CartTotal = ({ total }) => {
  return (
    <div className="shopping-cart-total">
      <span className="lighter-text">Total:</span>
      <span className="main-color-text">{total}</span>
    </div>
  );
};

export default CartTotal;
