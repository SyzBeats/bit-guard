import React from 'react';
import styled from 'styled-components';
import { Send } from 'react-feather';

const SubmitCircle = () => {
  return (
    <ButtonWrapper>
      <Send />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  border-radius: 100%;
  width: 5rem;
  height: 5rem;

  background: ${({ theme }) => theme.gradients.login};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.card_1};
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.card_2};
    cursor: pointer;
  }
`;

export { SubmitCircle };
