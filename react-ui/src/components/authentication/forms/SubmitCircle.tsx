import React from 'react';
import styled from 'styled-components';
import { Send } from 'react-feather';

const SubmitCircle = () => {
  return (
    <ButtonWrapper type="submit">
      <Send />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  border: none;
  border-radius: 100%;
  width: 5rem;
  height: 5rem;

  background: ${({ theme }) => theme.gradients.login};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.card_1};
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.card_2};
    cursor: pointer;
    transform: scale3d(1.2, 1.2, 1.2);
  }
`;

export { SubmitCircle };
