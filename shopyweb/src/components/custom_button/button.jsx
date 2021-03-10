import React from 'react';

import './button_style.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google_sign' :''} custom-button `}{...otherProps}>
    {children}
  </button>
);

export default CustomButton;
