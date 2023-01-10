import React from 'react';
import propTypes from 'prop-types';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = ({ gridView, allProducts, filteredProducts }) => {
  if (allProducts.length === 0 && filteredProducts.length === 0) {
    return <div className="loading" />;
  }

  if (allProducts.length > 1 && filteredProducts.length === 0) {
    return (
      <h5 style={{ textTransform: 'none', textAlign: 'center' }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  return (
    <div>
      {gridView ? (
        <GridView filteredProducts={filteredProducts} />
      ) : (
        <ListView filteredProducts={filteredProducts} />
      )}
    </div>
  );
};

ProductList.propTypes = {
  gridView: propTypes.bool.isRequired,
  allProducts: propTypes.arrayOf(propTypes.shape({})).isRequired,
  filteredProducts: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default ProductList;
