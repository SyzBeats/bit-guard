import React from 'react';
import styled from 'styled-components';

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  padding: 1rem;

  h2 {
    margin: 2rem 0;
  }
`;

export default Section;
