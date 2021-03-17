import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IW4foK5vOMXH5VRQjSObB33lDnnL4qcuo0THPDMjdFwvGZ6BRaUah8k14VlaVZHLgYYjIqZTH8vWu7aJ77k9QT600KC7sPUgl';

  const onToken = (token) => {
    console.log(token);
    alert('Thank you for choosing TheKGM.Your payment received succesfully!');
  };

  return (
    <StripeCheckout
      label="Make Payment Now"
      name="The KGM Co. Ltd,"
      billingAddress
      shippingAddress
      image="/images/paymentheader.png"
      description={`Total payment is  $${price}`}
      amount={priceForStripe}
      panelLabel="Make Payment"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
