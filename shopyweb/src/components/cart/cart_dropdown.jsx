import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom_button/button';
import CartItem from '../cart_item/cart_item';
import './cart_dropdown.scss';

const CartDrop = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDrop);
