import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Wrapper>Footzer</Wrapper>;
};

const Wrapper = styled.footer`
  min-height: 30vh;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1rem solid #33045a;
  margin-top: 1rem;

  padding: 1rem;

  color: white;
`;
export default Footer;
