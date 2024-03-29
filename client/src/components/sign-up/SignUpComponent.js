import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FormInputComponent from '../form-input/FormInputComponent'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'
import { SignUpContainer, SignUpTitle } from './SignUpStyles'

import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils'
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpComponent = () => {
   const [userCrendentials, setCrendentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
   })

   const {displayName, email, password, confirmPassword} = userCrendentials
   
   const navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password) 
            // create a new user with this email and password 

            await createUserProfileDocument(user, {displayName}); // this is to create the user
            // into our database

            // redirect signed up user to the shop page
            navigate('/shop')

        }catch(error) {
            console.log(error)
        }
    }

    const handleChange = event => {
        const {name, value} = event.target
        setCrendentials({...userCrendentials, [name]: value})
    }

        return (
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInputComponent type='text' name='displayName' value={displayName} onChange = {handleChange} label='Display Name' required />
                    <FormInputComponent type='email' name='email' value={email} onChange = {handleChange} label='Email' required />
                    <FormInputComponent type='password' name='password' value={password} onChange = {handleChange} label='Password' required />
                    <FormInputComponent type='password' name='confirmPassword' value={confirmPassword} onChange = {handleChange} label='Confirm Password' required />
                    <CustomButtonComponent type='submit'>SIGN UP</CustomButtonComponent>
                </form>
            </SignUpContainer>
          )
    }

export default SignUpComponent