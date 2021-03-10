import React from 'react';
import SignIn from '../../components/sign_in/sign_in';
import SignUp from '../../components/sign_up/sign_up';
import './registration_page.scss';

const RegistrationPage = () => (
  <div className="registration">
    <SignIn />
    <SignUp />
  </div>
);

export default RegistrationPage;
