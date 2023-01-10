import React from 'react';
import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return isUser ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: propTypes.element.isRequired,
};

export default PrivateRoute;
