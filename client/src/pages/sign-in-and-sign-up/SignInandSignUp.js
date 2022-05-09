import React from 'react'
import { SignInAndSignUpContainer } from './SignInandSignUpStyles'

import SignIn from '../../components/sign-in/SignInComponent'
import SignUpComponent from '../../components/sign-up/SignUpComponent'

const SignInandSignUp = () => {
  return (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUpComponent />
    </SignInAndSignUpContainer>
  )
}

export default SignInandSignUp