import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Elements, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'

import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'
import StripeCheckout from '../../components/stripe-checkout-form/StripeCheckout'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors'
import './checkoutStyle.scss'

const stripePromise = loadStripe('pk_test_51KksksENpvpK9J8psPLe7fxjiNMjwNLM7GxWowCDdDm1XTaFSs8LKrK1Fef5nFLKOa8SSMVsRJ6a1kQXt7HrAsse00qgExWD6S');

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
      <StripeButton price={total}/>
    </div>
  )
}

export default CheckoutComponent