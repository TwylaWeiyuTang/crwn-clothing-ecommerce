import {useState} from 'react';
import FormInputComponent from '../form-input/FormInputComponent';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import { signInWithGoogle, auth } from '../../firebase/firebaseUtils';
import { signInWithEmailAndPassword } from "firebase/auth";

import './signInStyle.scss'

const SignIn = () => {
    const [userCrendentials, setCrendentials] = useState({email: '', password: ''})

    const { email, password } = userCrendentials
    const handleSubmit = async event => {
        event.preventDefault() // this will prevent the default submit action from firing

        try {
            await signInWithEmailAndPassword(auth, email, password)
            // if the above code succeed, we will clear our sign in form
            setCrendentials({email: '', password: ''})
        } catch(error) {
            console.log(error)
        }
    }

    const handleChange = event => {
        const {value, name} = event.target // pull of the value and name from the input itself
        setCrendentials({...userCrendentials, [name]: value})
    }


        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInputComponent
                    name='email' 
                    type='email' 
                    value={email} 
                    label='email'
                    handleChange={handleChange} 
                    required/>

                    <FormInputComponent
                    name='password'
                    type='password' 
                    label='password'
                    value={password} 
                    handleChange={handleChange} 
                    required/>

                    <div className='buttons'>
                        <CustomButtonComponent type='submit'> Sign in</CustomButtonComponent>
                        <CustomButtonComponent type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButtonComponent>
                    </div>
                </form>
            </div>
        )

}

export default SignIn