import React from 'react';
import styled from 'styled-components';
import { MessageCount } from '../../../metrics/MessageCount';
import { SignalCount } from '../../../metrics/SignalCount';

interface Props {
  type: 'signals' | 'message';
}

function getCounter(type) {
  switch (type) {
    case 'signals':
      return <SignalCount />;
    case 'message':
      return <MessageCount />;
  }
}

const Counter = ({ type }: Props) => {
  return <Content>{getCounter(type)}</Content>;
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
