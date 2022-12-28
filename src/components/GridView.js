import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';

const GridView = ({ products }) => (
  <Wrapper>
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

GridView.propTypes = {
  products: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default GridView;
