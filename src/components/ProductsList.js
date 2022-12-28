import React from 'react';
import propTypes from 'prop-types';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = ({ gridView, products }) => {
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  return (
    <div>
      {gridView ? (
        <GridView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </div>
  );
};

ProductList.propTypes = {
  gridView: propTypes.bool.isRequired,
  products: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default ProductList;
