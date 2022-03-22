import './App.css';
import { Route } from 'react-router-dom';
import HomepageComponent from './pages/homepage/HomepageComponent';
import { Routes } from 'react-router-dom';
import ShopComponent from './pages/shoppage/ShopComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInandSignUp from './pages/sign-in-and-sign-up/SignInandSignUp';
import { auth } from './firebase/firebaseUtils';
import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    } 
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      // whenever any changes occur on Firebase from any source related to this application,
      // firebase sends out a message that the user Auth state has changed
      // so this is an open subscription, thus we need to close the subscription, 
      // when this unmount
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // close the subscription to the Firebase user management
  }

  render() {
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element = {<HomepageComponent />} />
          <Route path='/shop' element = {<ShopComponent />} />
          <Route path='/signin' element = {<SignInandSignUp />} />
        </Routes>
      </div>
    );
  }
}
export default App;
