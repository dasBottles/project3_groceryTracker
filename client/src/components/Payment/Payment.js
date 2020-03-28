import React, { useState } from 'react';
import '../Payment/style.css'
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {

  const [product, setProduct] = useState({
    name: 'react',
    price: 10,
    productBy: 'Facebook'
  })
  
  const makePayment = token => {
    const body = {
      token,
      product
    }
    const header = {
      'Content-Type': 'application/json'
    }

    return fetch('http://localhost:3000/payment', {
      method: 'POST',
      header,
      body: JSON.stringify(body)
    })
    .then(response => {
      console.log(response)
      const {status} = response;
      console.log(status)
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
        <StripeCheckout
        stripeKey={process.env.STRIPE_PUBLIC_KEY || 'pk_test_iwJZkRcNGSzsRCT4LTkagub000XFwSXXvq'} 
        token={makePayment}
        amount= {product.price * 100}
        name= {product.name}
        >
          <button className='btn-large blue'>Purchase for ${product.price}</button>
        </StripeCheckout>
    </div>
  );
}

export default Payment;
