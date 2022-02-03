import React from 'react';
import styled from 'styled-components';

const Message = () => {
  return (
    <Wrapper>
      <p>Message name: Single message</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  margin: 0.25rem 0;

  &:nth-child(2n) {
    background: #eaeaea;
  }

  transition: all 0.1s;
  &:hover {
    cursor: pointer;
    color: #00275a;
    background: #e2e2e2;
  }
`;

export { Message };
