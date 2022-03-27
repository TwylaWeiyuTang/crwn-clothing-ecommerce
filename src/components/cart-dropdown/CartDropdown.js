import React from 'react'
import { connect } from 'react-redux'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'
import CartItemComponent from '../cart-item/CartItemComponent'

import './cartDropdownStyle.scss'

const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {cartItems.map(cartItem => <CartItemComponent key={cartItem.id} item = {cartItem} />)}
        </div>
        <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})

export default connect (mapStateToProps) (CartDropdown)