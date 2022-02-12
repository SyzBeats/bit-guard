import React from 'react';
import styled from 'styled-components';

interface IwrapperProps {
  alignSelf?: string;
  justifySelf?: string;
  flex?: string;
}

const FlexGridItem = styled.div<IwrapperProps>`
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
  flex: ${({ flex }) => flex || 'initial'};
`;

export { FlexGridItem };
