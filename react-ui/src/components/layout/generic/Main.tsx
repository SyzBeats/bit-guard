import React from 'react';
import styled from 'styled-components';

const Main = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.section`
  padding: 2rem;
`;

export default Main;
