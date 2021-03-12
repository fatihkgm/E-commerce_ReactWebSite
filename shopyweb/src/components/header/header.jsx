import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './header.scss';
import { auth } from '../../firebase/firebase';
import CartIcon from '../cart_icon/cart_icon';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import CartDrop from '../cart/cart_dropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { ReactComponent as Logo } from '../../assets/kgm.svg';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        <i className="far fa-home"></i>
        HOME
      </Link>
      <Link className="option" to="/shopy">
        <i className="fal fa-shopping-cart"></i>
        SHOPY
      </Link>
      <Link className="option" to="/shopy">
        <i className="far fa-sms"></i>
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <i className="far fa-sign-out-alt"></i>
          SIGNOUT
        </div>
      ) : (
        <Link className="option" to="/register">
          <i className="far fa-sign-in-alt"></i>
          SIGNIN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDrop />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
