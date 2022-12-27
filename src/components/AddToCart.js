import React from 'react';
import uuid from 'react-uuid';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
  const { colors, stock } = product;
  const [mainColor, setMainColor] = React.useState(colors[0]);
  const [amount, setAmount] = React.useState(1);

  const increaseAmount = () => {
    setAmount((oldAmount) => {
      let currentAmount = oldAmount + 1;
      if (currentAmount > stock) {
        currentAmount = stock;
      }
      return currentAmount;
    });
  };

  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let currentAmount = oldAmount - 1;
      if (currentAmount < 1) {
        currentAmount = 1;
      }
      return currentAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color) => (
            <button
              key={uuid()}
              type="button"
              style={{ background: color }}
              className={`${
                mainColor === color ? 'color-btn active' : 'color-btn'
              }`}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
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
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

AddToCart.propTypes = {
  product: propTypes.shape({
    id: propTypes.string.isRequired,
    colors: propTypes.arrayOf(propTypes.shape({})).isRequired,
    stock: propTypes.number.isRequired,
  }).isRequired,
};

export default AddToCart;
