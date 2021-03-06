import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import MainPage from './pages/homepage/mainpage.component';
import ShopyPage from './pages/shopy/shopy.component';
import Header from './components/header/header';
import CheckOutPage from './pages/checkout/checkout';
import RegistrationPage from './pages/registration/registration_page';
import { auth, createUserProfile } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/shopy" component={ShopyPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/register"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <RegistrationPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
