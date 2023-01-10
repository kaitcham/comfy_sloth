import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => (
  <Wrapper>
    <div className="section-center">
      <h3>
        <Link to="/">Home</Link>
        {product && <Link to="/products">/ Products</Link>}
        /
        {title}
      </h3>
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  product: PropTypes.bool.isRequired,
};

export default PageHero;
