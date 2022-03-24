import './App.css';
import { Route } from 'react-router-dom';
import HomepageComponent from './pages/homepage/HomepageComponent';
import { Routes } from 'react-router-dom';
import ShopComponent from './pages/shoppage/ShopComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInandSignUp from './pages/sign-in-and-sign-up/SignInandSignUp';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from "firebase/firestore";
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
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async(userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        onSnapshot(userRef, (doc) => { //onSnapshot method is for us to listen to the update of
          // the user
          this.setState({
            currentUser: {
              id: doc.id, // change the user state to include the id we get from the firebase
              ...doc.data() // change the user state to include any other user information we get from the doc.data()
            }
          })
        })
      }
      this.setState({currentUser: userAuth}) // if the userAuth does not exist (false), then set
      // our user state to null

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
