import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_live_8ArLWhk9YmUtQp75kZIpT0ZB';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error:', JSON.parse(error));
      alert('There was an issue with your payment. Kindly use a valid card')
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Auto Mall'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  )
};

export default StripeCheckoutButton;