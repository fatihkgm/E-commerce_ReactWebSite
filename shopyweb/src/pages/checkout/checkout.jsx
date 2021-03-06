import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout_item/checkout_item';
import StripeCheckoutButton from '../../components/stripe_button/stripe_button';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';

import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>ITEMS</span>
      </div>
      <div className="header-block">
        <span>NAME</span>
      </div>
      <div className="header-block">
        <span>NUMBER</span>
      </div>
      <div className="header-block">
        <span>PRICE</span>
      </div>
      <div className="header-block">
        <span>DELETE</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
