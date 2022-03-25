import React from 'react'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'

import './cartDropdownStyle.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
    </div>
  )
}

export default CartDropdown