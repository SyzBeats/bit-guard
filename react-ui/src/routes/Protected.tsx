import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PropsChildren } from '~/types/types-components';

const ProtectedRoute = (props: PropsChildren) => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return <>{props.children}</>;
};

export default ProtectedRoute;
