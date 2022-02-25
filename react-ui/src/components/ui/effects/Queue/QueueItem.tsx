import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Code, Layers, Clock, Shield, Database, Share2 } from 'react-feather';

const QueueItem = ({ content, index }) => {
  const getIcon = (text) => {
    switch (text) {
      case 'Military Grade Encryption':
        return <Database color="white" />;
      case 'Simple User interface':
        return <Code color="white" />;
      case 'Protected Secrets':
        return <Shield color="white" />;
      case 'Simplified Sharing function':
        return <Share2 color="white" />;
      case 'Smart deletion':
        return <Layers color="white" />;
      case 'Expiry Management':
        return <Clock color="white" />;
      default:
        return null;
    }
  };
  return (
    <Wrapper index={index}>
      <ListIcon>{getIcon(content)}</ListIcon>
      <ListText>{content}</ListText>
    </Wrapper>
  );
};

const rotate = keyframes`
  from {
    transform: translateY(-5.5rem);
  }

  to {
    transform: translateY(0rem);
  }
`;

type WrapperType = {
  index: number;
};

const ListIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListText = styled.div`
  flex: 5;
  padding-left: 10%;
`;

const Wrapper = styled.div<WrapperType>`
  transform-origin: top;
  transition: all 0.3s;
  animation: ${rotate} 1s ease-out;
  height: 5.35rem;
  width: 100%;
  margin-top: ${(props) => (props.index === 0 ? '0rem' : '0.5rem')};

  background: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ theme }) =>
    `linear-gradient(110deg, ${theme.colors.highlight} 21.5%, white 21.5%) `};
  padding: 0 20px;
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);

  font-size: 20px;
  display: flex;
  align-items: center;
  font-weight: 600;
  overflow: hidden;
`;
export { QueueItem };
