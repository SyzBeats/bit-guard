import React from 'react';
import { Link, Trash } from 'react-feather';
import styled from 'styled-components';
import { useSignalState } from '../../zustand/store';
import { Signals } from './Signals';

interface Iprops {
  signal: {
    id: string;
    title: string;
    createdAt: string;
  };
}

const Signal = ({ signal }: Iprops) => {
  const { id, title, createdAt } = signal;

  const { removeSignal } = useSignalState();

  /**
   * @description handles the deletion of signals
   */
  const handleDelete = (): void => {
    if (!id) {
      return;
    }

    removeSignal(signal);
  };

  return (
    <Wrapper>
      <MessageContent>
        <div>
          <MessageTitle>Title: </MessageTitle>
          <MessageContentText>{title}</MessageContentText>
        </div>
        <div>
          <MessageTitle>Created at: </MessageTitle>
          <MessageContentText>{new Date(parseInt(createdAt, 10)).toLocaleString()}</MessageContentText>
        </div>
      </MessageContent>
      <MessageActions>
        <Trash size={20} color="#01141F" onClick={() => handleDelete()} />
        <Link size={20} color="#01141F" />
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

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.depth_2};
    background: #006eb50f;
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
  font-weight: 400;
`;

export { Signal };
