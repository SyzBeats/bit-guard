import React from 'react';
import { ContentBox } from '../../ui/styled/boxes/ContentBox';
import styled from 'styled-components';

interface Props {
  message: string;
}

const RevealBox = ({ message }: Props) => {
  console.log(message);
  return (
    <ContentBox>
      <Content>{message}</Content>
    </ContentBox>
  );
};

const Content = styled.div`
  // preserve text white space
  white-space: pre-wrap;
  width: 100%;
  word-wrap: break-word;

  max-height: 30vh;
  font-family: monospace;
  letter-spacing: 0.1rem;
`;

export { RevealBox };
