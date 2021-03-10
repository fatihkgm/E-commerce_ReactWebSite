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
      <Link className="option" to="/shopy">
        SHOPY
      </Link>
      <Link className="option" to="/shopy">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/register">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
