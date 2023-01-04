import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageHero from '../components/PageHero';
import CartContent from '../components/CartContent';

const CartPage = () => {
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
    <main>
      <PageHero title="cart" product={false} />
      <Wrapper className="page">
        <CartContent cart={cart} />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
