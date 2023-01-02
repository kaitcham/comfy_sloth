import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import formatPrice, { getUniqueValues } from '../utils/helpers';
import { updateFilters } from '../features/filteredProducts/filteredProductsSlice';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      price,
      minPrice,
      maxPrice,
      shipping,
    },
    allProducts,
  } = useSelector((state) => state.filteredProducts);

  const dispatch = useDispatch();

  const categories = getUniqueValues(allProducts, 'category');
  const companies = getUniqueValues(allProducts, 'company');
  const colors = getUniqueValues(allProducts, 'colors');

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'price') {
      const value = Number(e.target.value);
      dispatch(updateFilters({ [name]: value }));
    }
    if (name === 'shipping') {
      const value = e.target.checked;
      dispatch(updateFilters({ [name]: value }));
    }
    dispatch(updateFilters({ [name]: value.toLowerCase() }));
  };

  const handleClick = (e) => {
    const { name } = e.target;
    if (name === 'category') {
      const value = e.target.innerText;
      dispatch(updateFilters({ [name]: value.toLowerCase() }));
    }
    if (name === 'color') {
      const value = e.target.dataset.color;
      dispatch(updateFilters({ [name]: value.toLowerCase() }));
    }
  };

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <h5>search products</h5>
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              className="search-input"
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="form-control">
          <h5>category</h5>
          <div>
            {categories.map((cat) => (
              <button
                type="button"
                name="category"
                key={uuid()}
                onClick={handleClick}
                className={`${cat === category ? 'active' : null}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="form-control">
          <h5>company</h5>
          <select
            name="company"
            value={company}
            className="company"
            onChange={handleChange}
          >
            {companies.map((comp) => (
              <option key={uuid()} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <h5>colors</h5>
          <div className="colors">
            {colors.map((col) => {
              if (col === 'all') {
                return (
                  <button
                    key={uuid()}
                    name="color"
                    type="button"
                    onClick={handleClick}
                    data-color="all"
                    className={`${
                      color === 'all' ? 'all-btn active' : 'all-btn'
                    }`}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={uuid()}
                  name="color"
                  type="button"
                  style={{ background: col }}
                  className={`${
                    color === col ? 'color-btn active' : 'color-btn'
                  }`}
                  data-color={col}
                  onClick={handleClick}
                >
                  {color === col ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="form-control">
          <h5>price</h5>
          <p className="price">{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className="form-control shipping">
          <span>free shipping</span>
          <input
            id="shipping"
            type="checkbox"
            name="shipping"
            checked={shipping}
            onChange={handleChange}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    input {
      margin-top: 3px;
    }
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
