import { lazy, Suspense, useRef } from 'react'
import { GlobalStyle } from './globalStyles';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HeaderComponent from './components/header/HeaderComponent';
import WithSpinner from './components/with-spinner/WithSpinner'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'
import Footer from './Sections/Footer'
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from "firebase/firestore";
import {setCurrentUser} from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors';
import {useEffect} from 'react';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import 'locomotive-scroll/dist/locomotive-scroll.css'

import { dark } from './styles/Themes';
import ScrollTriggerProxy from './components/ScrollTriggerProxy'
import CheckoutSuccess from './pages/checkout/CheckoutSuccess';

const HomepageComponent = lazy(() => import ('./pages/homepage/HomepageComponent'))
// when the app mounts for the first time, the chunks will render all the code except for Homepage
// component, the only time this component will be loaded is when we go to the home page router

const ShopComponent = lazy(() => import ('./pages/shoppage/ShopComponent'))
const SignInandSignUp = lazy(() => import ('./pages/sign-in-and-sign-up/SignInandSignUp'))
const CheckoutComponent = lazy(() => import ('./pages/checkout/CheckoutComponent'))

const App = () => {
  const containerRef = useRef(null)
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
      <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider 
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          }
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}>
        <ScrollTriggerProxy />
        <AnimatePresence>
        
          <main className='App' data-scroll-container ref={containerRef} style={{overflow: "hidden scroll"}}>
          <HeaderComponent />
        <ErrorBoundary>
        <Suspense fallback={<WithSpinner />}>
        <Routes>
          <Route exact path='/' element = {<HomepageComponent />} />
          <Route path='/shop/*' element = {<ShopComponent />} />
          {/* By appending a /* to the end of our /shop path, we're essentially telling 
          React Router that Shop has a nested Routes component and our parent path should match 
          for /shop as well as any other location that matches the /shop/* pattern */}
          <Route exact path='/checkout' element = {<CheckoutComponent />} />
          <Route path='/checkout-success' element={<CheckoutSuccess />} />
          <Route exact path='/signin' element= {currentUser ? (<Navigate replace to='/' />) : (<SignInandSignUp />)} />
          {/* if there is a signed in user, then redirect them to Homepage,
          otherwise go to sign in and sign up page */}
        </Routes>
        </Suspense>
        </ErrorBoundary>
        <Footer />
        </main>
        </AnimatePresence>
        </LocomotiveScrollProvider>
        </ThemeProvider>
      </>
    )
        }

export default App;
// we pass in mapStateToProps, mapDispatchToProps so we can have access to this.state.currentUser
// and this.props.setCurrentUser
