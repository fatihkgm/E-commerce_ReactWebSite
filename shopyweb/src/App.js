import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import MainPage from './pages/homepage/mainpage.component';

const WatchesPage = () => (
  <div>
    <h1>WATHES PAGE </h1>
  </div>
);

function App() {
 
    return (
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/watches" component={WatchesPage} />
        </Switch>
      </div>
    );
}

export default App;
