import React from 'react'
import { useSelector } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors'
import './checkoutStyle.scss'

const CheckoutComponent = () => {
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <StripeButton/>
    </div>
  )
}

export default CheckoutComponent