import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading" />
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
};

const Wrapper = styled.section`
  display: grid;
  min-height: 100vh;
  place-items: center;
`;

AuthWrapper.propTypes = {
  children: propTypes.element.isRequired,
};

export default AuthWrapper;
