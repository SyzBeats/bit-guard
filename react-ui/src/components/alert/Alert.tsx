import React from 'react';
import styled from 'styled-components';

interface AlertProps {
  type: string;
  message: string;
}

const Alert = ({ type, message }: AlertProps) => {
  switch (type) {
    case 'success':
      return <AlertSuccess>{message}</AlertSuccess>;

    case 'error':
      return <AlertError>{message}</AlertError>;

    default:
      return <AlertInfo>{message}</AlertInfo>;
  }
};

const AlertBase = styled.div`
  width: 100%;

  background-color: #fff;
  border-radius: 0.5rem;

  padding: 1rem;
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertSuccess = styled(AlertBase)`
  background-color: #dff0df;
`;

const AlertError = styled(AlertBase)`
  background-color: #f2dede;
`;

const AlertInfo = styled(AlertBase)`
  background-color: #c5f0f3;
`;

export { Alert };
