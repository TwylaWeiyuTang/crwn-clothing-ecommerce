import {useState} from 'react'
import FormInputComponent from '../form-input/FormInputComponent'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'
import './signUpStyle.scss'

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

        }catch(error) {
            console.log(error)
        }
    }

    const handleChange = event => {
        const {name, value} = event.target
        setCrendentials({...userCrendentials, [name]: value})
    }

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInputComponent type='text' name='displayName' value={displayName} onChange = {handleChange} label='Display Name' required />
                    <FormInputComponent type='email' name='email' value={email} onChange = {handleChange} label='Email' required />
                    <FormInputComponent type='password' name='password' value={password} onChange = {handleChange} label='Password' required />
                    <FormInputComponent type='password' name='confirmPassword' value={confirmPassword} onChange = {handleChange} label='Confirm Password' required />
                    <CustomButtonComponent type='submit'>SIGN UP</CustomButtonComponent>
                </form>
            </div>
          )
    }

export default SignUpComponent