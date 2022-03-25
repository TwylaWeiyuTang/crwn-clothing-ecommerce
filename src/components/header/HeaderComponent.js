import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebaseUtils'
import { signOut } from 'firebase/auth'
import CartIconComponent from '../cart-icon/CartIconComponent'
import CartDropdown from '../cart-dropdown/CartDropdown'

import './headerStyle.scss'
import { ReactComponent as Logo} from '../../assets/crown.svg'


const HeaderComponent = ({currentUser, hidden}) => {
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
                (<div className='option' onClick={() => signOut(auth)}>SIGN OUT</div>)
                : // if the user is not signed in, we will have them sign in first
                (<Link className='option' to='/signin'> SIGN IN </Link>)
            }
            <CartIconComponent />
        </div>
        {
            hidden ? null : // if the hidden state is true, then render nothing
            <CartDropdown />
        }
    </div>
  )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser, //state property
    hidden // state property
})

export default connect(mapStateToProps)(HeaderComponent) 
// connect is a higher order component
// this is for us to use the user state that is stored in redux  user reducer