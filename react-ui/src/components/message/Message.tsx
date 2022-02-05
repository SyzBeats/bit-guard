import React from 'react';
import { Copy, Trash } from 'react-feather';
import styled from 'styled-components';

const Message = () => {
  return (
    <Wrapper>
      <MessageContent>
        <span>
          <strong>Title</strong>: Single message
        </span>
      </MessageContent>
      <MessageActions>
        <Trash size={20} color="#01141F" />
        <Copy size={20} color="#01141F" />
      </MessageActions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #333;
  background: #fff;
  border-radius: 0.55rem;
  border: ${({ theme }) => `1px solid ${theme.colors.highlight}`};

  min-height: 8rem;
  padding: 0.75rem;
  line-height: 1.5em;

  display: flex;
  flex-direction: row;
  justify-content: center;

  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.depth_2};
  }
`;

const MessageContent = styled.div`
  flex: 5;
`;

const MessageActions = styled.div`
  flex: 1;

  gap: 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;

  svg {
    cursor: pointer;
  }
`;

export { Message };
