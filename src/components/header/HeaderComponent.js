import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { auth } from '../../firebase/firebaseUtils'
import { signOut } from 'firebase/auth'
import CartIconComponent from '../cart-icon/CartIconComponent'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './HeaderStyle'
import { ReactComponent as Logo} from '../../assets/crown.svg'


const HeaderComponent = ({currentUser, hidden}) => {
  return (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ? // if the user is signed in, then the sign out button shows
                (<OptionDiv onClick={() => signOut(auth)}>SIGN OUT</OptionDiv>)
                : // if the user is not signed in, we will have them sign in first
                (<OptionLink className='option' to='/signin'> SIGN IN </OptionLink>)
            }
            <CartIconComponent />
        </OptionsContainer>
        {
            hidden ? null : // if the hidden state is true, then render nothing
            <CartDropdown />
        }
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({ // createStructuredSelector will automatically
    // pass our top level state into each selector
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(HeaderComponent) 
// connect is a higher order component
// this is for us to use the user state that is stored in redux  user reducer