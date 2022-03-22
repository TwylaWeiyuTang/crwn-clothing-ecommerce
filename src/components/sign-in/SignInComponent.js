import React from 'react';
import FormInputComponent from '../form-input/FormInputComponent';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import { signInWithGoogle } from '../../firebase/firebaseUtils';
import './signInStyle.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault() // this will prevent the default submit action from firing

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target // pull of the value and name from the input itself
        this.setState({[name]: value})
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    label='email'
                    handleChange={this.handleChange} 
                    required/>

                    <FormInputComponent
                    name='password'
                    type='password' 
                    label='password'
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    required/>

                    <div className='buttons'>
                        <CustomButtonComponent type='submit'> Sign in</CustomButtonComponent>
                        <CustomButtonComponent onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn