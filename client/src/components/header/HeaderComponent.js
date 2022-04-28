import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase/firebaseUtils'
import { signOut } from 'firebase/auth'
import CartIconComponent from '../cart-icon/CartIconComponent'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './HeaderStyle'
import { ReactComponent as Logo} from '../../assets/crown.svg'


const HeaderComponent = () => {
    const currentUser = useSelector(selectCurrentUser)
    const hidden = useSelector(selectCartHidden)
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
export default HeaderComponent
// connect is a higher order component
// this is for us to use the user state that is stored in redux  user reducer