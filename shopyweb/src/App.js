import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/homepage/mainpage.component';
import ShopyPage from './pages/shopy/shopy.component';
import Header from './components/header/header';
import RegistrationPage from './pages/registration/registration_page';
import { auth, createUserProfile } from './firebase/firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/shopy" component={ShopyPage} />
          <Route path="/register" component={RegistrationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
