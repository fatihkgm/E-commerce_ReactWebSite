import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom_button/button';
import CartItem from '../cart_item/cart_item';
import { selectCartItems } from '../../redux/cart/cart.selector';
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDrop);
