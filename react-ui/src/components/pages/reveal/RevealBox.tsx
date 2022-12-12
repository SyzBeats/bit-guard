import React from 'react';
import styled from 'styled-components';

import { ContentBox } from '../../ui/styled/boxes/ContentBox';

interface Props {
  message: string;
}

const RevealBox = ({ message }: Props) => {
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
