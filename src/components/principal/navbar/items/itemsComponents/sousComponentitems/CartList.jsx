import React from 'react';
import CartItem from './CartItem';

const CartList = () => {
  const items = [
    { imageSrc: 'assets/img/products/2.svg', itemName: 'Cool Shirt', itemPrice: '$29.00', itemQuantity: 1 },
    { imageSrc: 'assets/img/products/3.svg', itemName: 'Military Short', itemPrice: '$39.00', itemQuantity: 1 },
    { imageSrc: 'assets/img/products/4.svg', itemName: 'Cool Backpack', itemPrice: '$125.00', itemQuantity: 1 },
  ];

  return (
    <ul className="shopping-cart-items">
      {items.map((item, index) => (
        <CartItem
          key={index}
          imageSrc={item.imageSrc}
          itemName={item.itemName}
          itemPrice={item.itemPrice}
          itemQuantity={item.itemQuantity}
        />
      ))}
    </ul>
  );
};

export default CartList;