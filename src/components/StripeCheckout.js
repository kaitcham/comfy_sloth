import React from 'react';
import styled from 'styled-components';

const CheckoutForm = () => <h2>Hello From Stripe CheckoutForm</h2>;

const StripeCheckout = () => (
  <Wrapper>
    <CheckoutForm />
  </Wrapper>
);

const Wrapper = styled.section``;

export default StripeCheckout;
