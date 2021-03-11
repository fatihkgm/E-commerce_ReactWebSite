import React from 'react';
import CustomButton from '../custom_button/button';
import './cart_dropdown.scss';

const CartDrop = () => (
  <div className="cart-dropdown">
    <div className="cart-item" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDrop;
