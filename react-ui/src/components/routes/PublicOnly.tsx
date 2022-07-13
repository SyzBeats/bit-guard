// protected route

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropsChildren } from '../../typings/types.components';

const PublicOnlyRoute = (props: PropsChildren) => {
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
