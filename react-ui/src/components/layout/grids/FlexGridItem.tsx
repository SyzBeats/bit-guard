import styled from 'styled-components';

interface IWrapperProps {
  alignSelf?: string;
  justifySelf?: string;
  flex?: string;
}

const FlexGridItem = styled.div<IWrapperProps>`
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
  flex: ${({ flex }) => flex || 'initial'};
`;

export { FlexGridItem };
