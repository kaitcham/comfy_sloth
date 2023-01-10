import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    if (stars >= index + 1) {
      return <BsStarFill key={index} />;
    }
    if (stars >= number) {
      return <BsStarHalf key={index} />;
    }
    return <BsStar key={index} />;
  });

  return (
    <Wrapper>
      <div className="stars">
        <span>{tempStars}</span>
      </div>
      <p className="reviews">
        (
        {reviews}
        {' '}
        customer reviews)
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;

Stars.propTypes = {
  stars: propTypes.number.isRequired,
  reviews: propTypes.number.isRequired,
};

export default Stars;
