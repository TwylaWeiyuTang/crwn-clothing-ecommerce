import { GlobalStyle } from './globalStyles';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomepageComponent from './pages/homepage/HomepageComponent';
import ShopComponent from './pages/shoppage/ShopComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInandSignUp from './pages/sign-in-and-sign-up/SignInandSignUp';
import CheckoutComponent from './pages/checkout/CheckoutComponent';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from "firebase/firestore";
import {setCurrentUser} from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors';
import {useEffect} from 'react';

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
  useEffect(() => {
     onAuthStateChanged(auth, async(userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        onSnapshot(userRef, (doc) => { //onSnapshot method is for us to listen to the update of
          // the user
          dispatch(setCurrentUser({
              id: doc.id, // change the user state to include the id we get from the firebase
              ...doc.data() // change the user state to include any other user information we get from the doc.data()
          }))
        })}
      dispatch(setCurrentUser(userAuth))})// if the userAuth does not exist (false), then set
      // our user state to null
  }, [dispatch])

    return (
      <div>
        <GlobalStyle />
        <HeaderComponent />
        <Routes>
          <Route exact path='/' element = {<HomepageComponent />} />
          <Route path='/shop/*' element = {<ShopComponent />} />
          {/* By appending a /* to the end of our /shop path, we're essentially telling 
          React Router that Shop has a nested Routes component and our parent path should match 
          for /shop as well as any other location that matches the /shop/* pattern */}
          <Route exact path='/checkout' element = {<CheckoutComponent />} />
          <Route path='/signin' element= {currentUser ? (<Navigate replace to='/' />) : (<SignInandSignUp />)} />
          {/* if there is a signed in user, then redirect them to Homepage,
          otherwise go to sign in and sign up page */}
        </Routes>
      </div>
    )
        }

export default App;
// we pass in mapStateToProps, mapDispatchToProps so we can have access to this.state.currentUser
// and this.props.setCurrentUser
