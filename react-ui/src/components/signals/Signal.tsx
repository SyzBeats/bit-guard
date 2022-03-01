import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { Trash } from 'react-feather';

import dateService from '../../services/dates';
import { useSignalState } from '../../zustand/store';
import { DELETE_SIGNAL } from '../../graphql/mutations/signal/mutation-delete-signal';
import shallow from 'zustand/shallow';

interface Iprops {
  signal: {
    id: string;
    title: string;
    createdAt: string;
  };
}

const Signal = ({ signal }: Iprops) => {
  const { id, title, createdAt } = signal;
  const signalState = useSignalState((state) => ({ removeSignal: state.removeSignal }), shallow);

  const [deleteSignal] = useMutation(DELETE_SIGNAL, {
    onCompleted: (data) => {
      if (!data?.deleteSignal?.id) {
        console.error("[ERROR] Couldn't delete signal");
      }

      signalState.removeSignal(data?.deleteSignal?.id);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  const handleDelete = (): void => {
    if (!id) {
      return;
    }

    const variables = { id };

    deleteSignal({
      variables,
    });
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
          <MessageContentText>{dateService.parseStringToLocaleDate(createdAt)}</MessageContentText>
        </div>
      </MessageContent>

      <MessageActions>
        <Trash size={20} color="#01141F" onClick={() => handleDelete()} />
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
