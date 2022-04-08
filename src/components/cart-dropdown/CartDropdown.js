import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigate } from 'react-router-dom';
import CustomButtonComponent from '../custom-button/CustomButtonComponent'
import CartItemComponent from '../cart-item/CartItemComponent'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartHidden } from '../../redux/cart/cartActions';

import { CartDropdownContainer, CartItemContainer, EmptyMessageContainer, CartDropdownButton } from './CartDropdownStyle';

const CartDropdown = ({cartItems, dispatch}) => {
  const history = useNavigate();

  return (
    <CartDropdownContainer>
        <CartItemContainer>
          {
            cartItems.length ?(
            cartItems.map(cartItem => 
             (<CartItemComponent key={cartItem.id} item = {cartItem} />)))
             // if cartitems has length, which means there is item in the cart
            :
            (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
            // if there is no length, then the cart is empty
            }
        </CartItemContainer>
        <CartDropdownButton onClick={() => {
          history('/checkout');
          dispatch(toggleCartHidden()) // this will toggle the cart icon again, so the cart
          // dropdown will be closed automatically while we being redirected to checkout page
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector ({ // pull off cart state from root reducer
  cartItems: selectCartItems
})

export default connect (mapStateToProps) (CartDropdown)