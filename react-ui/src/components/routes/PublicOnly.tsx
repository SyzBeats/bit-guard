// protected route

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PublicOnlyRoute = (props) => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  return <>{props.children}</>;
};

export default PublicOnlyRoute;
