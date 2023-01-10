import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StripeCheckout from '../components/StripeCheckout';

const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.cart);
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            Shop now
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="page-100">
      <StripeCheckout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
