import React from 'react';
import { Trash } from 'react-feather';
import styled from 'styled-components';

const Signal = () => {
  return (
    <Wrapper>
      <MessageContent>
        <div>
          <MessageTitle>Title: </MessageTitle>
          <MessageContentText>Some text 2</MessageContentText>
        </div>
        <div>
          <MessageTitle>Content: </MessageTitle>
          <MessageContentText>Some text</MessageContentText>
        </div>
      </MessageContent>
      <MessageActions>
        <Trash size={20} color="#01141F" />
      </MessageActions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #333;
  background: #fff;
  border-radius: 0.55rem;
  box-shadow: ${({ theme }) => theme.shadows.depth_1};
  min-height: 8rem;
  padding: 0.75rem;
  line-height: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0.4rem;
    height: 100%;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
    transform-origin: left;
    border-top-left-radius: 0.55rem;
    border-bottom-left-radius: 0.55rem;
    background: ${({ theme }) => theme.colors.highlight_blue};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.depth_2};

    &::after {
      transform: scaleX(1);
    }
  }
`;

const MessageContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MessageActions = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.75rem;
  svg {
    cursor: pointer;
  }
`;

const MessageTitle = styled.strong`
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 1.5em;
`;

const MessageContentText = styled.span`
  font-size: 1.6rem;
  line-height: 1.5em;
  font-weight: 300;
`;

export { Signal as Message };
