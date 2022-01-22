import React from 'react';
import styled from 'styled-components';

const Counter = () => {
  return <Content>{Math.floor(Math.random() * 100)}</Content>;
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  font-size: 8rem;
  font-weight: 700;
`;

export default Counter;
