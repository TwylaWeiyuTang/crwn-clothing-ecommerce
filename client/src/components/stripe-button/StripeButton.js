import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51KksksENpvpK9J8psPLe7fxjiNMjwNLM7GxWowCDdDm1XTaFSs8LKrK1Fef5nFLKOa8SSMVsRJ6a1kQXt7HrAsse00qgExWD6S'
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert('There was an issue with your payment.')
    })
  }
  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton