import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/homepage/mainpage.component";
import ShopyPage from "./pages/shopy/shopy.component.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/shopy" component={ShopyPage} />
      </Switch>
    </div>
  );
}

export default App;
