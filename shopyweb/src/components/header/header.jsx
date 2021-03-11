import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { auth } from '../../firebase/firebase';
import { ReactComponent as Logo } from '../../assets/kgm.svg';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        <i class="far fa-home"></i>
        HOME
      </Link>
      <Link className="option" to="/shopy">
        <i class="fal fa-shopping-cart"></i>
        SHOPY
      </Link>
      <Link className="option" to="/shopy">
        <i class="far fa-sms"></i>
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <i class="far fa-sign-out-alt"></i>
          SIGNOUT
        </div>
      ) : (
        <Link className="option" to="/register">
          <i class="far fa-sign-in-alt"></i>
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
