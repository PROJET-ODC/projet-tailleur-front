import React from 'react';

const CartItem = ({ imageSrc, itemName, itemPrice, itemQuantity }) => {
  return (
    <li className="cart-row">
      <img src={imageSrc} alt={itemName} />
      <span className="item-meta">
        <span className="item-name">{itemName}</span>
        <span className="meta-info">
          <span className="item-price">{itemPrice}</span>
          <span className="item-quantity">Qty: {itemQuantity}</span>
        </span>
      </span>
    </li>
  );
};

export default CartItem;
