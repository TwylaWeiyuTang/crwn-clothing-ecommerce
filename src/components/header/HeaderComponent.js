import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseUtils'
import { signOut } from 'firebase/auth'

import './headerStyle.scss'
import { ReactComponent as Logo} from '../../assets/crown.svg'


const HeaderComponent = ({currentUser}) => {
  return (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? // if the user is signed in, then the sign out button shows
                <div className='option' onClick={() => signOut(auth)}>SIGN OUT</div>
                : // if the user is not signed in, we will have them sign in first
                <Link className='option' to='/signin'> SIGN IN </Link>
            }
        </div>
    </div>
  )
}

export default HeaderComponent