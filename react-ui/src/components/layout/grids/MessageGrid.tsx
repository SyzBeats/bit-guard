import React from 'react';
import styled from 'styled-components';

const MessageGrid = ({ children }) => {
  return <Grid>{children}</Grid>;
};

const Grid = styled.div`
  display: grid;

  gap: 1.5rem;

  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export { MessageGrid };
