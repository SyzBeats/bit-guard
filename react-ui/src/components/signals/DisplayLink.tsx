import React, { useState } from 'react';
import { Copy } from 'react-feather';
import styled from 'styled-components';

interface Props {
  link: string;
}

const DisplayLink = ({ link }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyLinkToClipboard = (link: string) => {
    // use navigator.clipboard.writeText(text) to copy to clipboard
    navigator.clipboard.writeText(link);
    setCopied(true);
  };

  return (
    <Container copied={copied}>
      <CopySection>
        Secret Link: <Copy onClick={() => copyLinkToClipboard(link)} />
      </CopySection>
      <Wrapper>{link}</Wrapper>
    </Container>
  );
};

interface ContainerState {
  copied: boolean;
}

const Container = styled.div<ContainerState>`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  overflow: hidden;
  width: 100%;

  background: ${({ theme, copied }) => (copied ? '#085b41' : theme.gradients.login)};
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Wrapper = styled.div`
  font-family: monospace;
  width: 100%;
  height: 100%;
  display: flex;
  word-break: break-all;
`;

const CopySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export { DisplayLink };
