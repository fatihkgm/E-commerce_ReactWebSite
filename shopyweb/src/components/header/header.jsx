import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/kgm.svg';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shopy">
        SHOP
      </Link>
      <Link className="option" to="/shopy">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
