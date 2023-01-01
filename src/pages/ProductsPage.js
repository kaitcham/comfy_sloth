import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Sort from '../components/Sort';
import PageHero from '../components/PageHero';
import Filters from '../components/Filters';
import ProductsList from '../components/ProductsList';
import { getProducts } from '../features/filteredProducts/filteredProductsSlice';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { gridView, allProducts, filteredProducts } = useSelector(
    (state) => state.filteredProducts,
  );

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <main>
      <PageHero title="products" product={false} />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort gridView={gridView} filteredProducts={filteredProducts} />
            <ProductsList
              gridView={gridView}
              allProducts={allProducts}
              filteredProducts={filteredProducts}
            />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
