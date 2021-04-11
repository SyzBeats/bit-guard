import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Wrapper>Footer</Wrapper>;
};

const Wrapper = styled.footer`
  min-height: 30vh;
  background: ${({ theme }) => theme.colors.background};
  border-top: 0.5rem solid #2d95da;
  margin-top: 1rem;

  padding: 1rem;

  color: white;
`;
export default Footer;
