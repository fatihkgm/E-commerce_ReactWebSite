import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/homepage/mainpage.component';
import ShopyPage from './pages/shopy/shopy.component';
import Header from './components/header/header';
import RegistrationPage from './pages/registration/registration_page';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/shopy" component={ShopyPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
