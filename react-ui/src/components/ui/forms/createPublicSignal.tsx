import React, { useState } from 'react';
import styled from 'styled-components';
import { shallow } from 'zustand/shallow';
import { useMutation } from '@apollo/client';

import { useCreateSecretFormState, useSignalState } from '~/store/store';
import { CREATE_PUBLIC_SIGNAL } from '~/graphql/mutations/signal/mutation-create-public-signal';

import { FlexGridEqual } from '../../layout/grids/FlexGrid';
import { FlexGridItem } from '../../layout/grids/FlexGridItem';
import { DisplayLink } from '../../signals/DisplayLink';
import { Alert } from '../alert/Alert';
import { ButtonWrapper } from '../buttons/ButtonWrapper';
import { TextArea } from './inputs/TextArea';
import TextInput from './inputs/TextInput';
import { Loader } from '../loaders/Loader';

const CreatePublicSignal = () => {
  const formState = useCreateSecretFormState(
    (state) => ({
      setLink: state.setLink,
      setContent: state.setContent,
      setTitle: state.setTitle,
      content: state.content,
      title: state.title,
      link: state.link,
    }),
    shallow,
  );

  const signalState = useSignalState((state) => ({ setLinkCopied: state.setLinkCopied }), shallow);

  const [alert, setAlert] = useState({
    type: '',
    message: '',
  });

  const [createSignalMutation, { loading = false }] = useMutation(CREATE_PUBLIC_SIGNAL, {
    onCompleted: ({ createPublicSignal }) => {
      formState.setLink(createPublicSignal?.link?.content);
      formState.setContent('');
      formState.setTitle('');
      signalState.setLinkCopied(false);
      setAlert({ type: '', message: '' });
    },
    onError: (error) => {
      setAlert({ type: 'error', message: error.message });
      signalState.setLinkCopied(false);
    },
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!formState.title || !formState.content) {
      setAlert({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    createSignalMutation({
      variables: {
        title: formState.title,
        content: formState.content,
      },
    });
  };

  return (
    <Wrapper>
      <FlexGridEqual gap="1.5rem" justifyContent="stretch">
        <FlexGridItem alignSelf="stretch" flex="1">
          <TextInput label="Enter a title" name="title" value={formState.title} onChange={(e) => formState.setTitle(e.target.value)} />
        </FlexGridItem>
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" justifyContent="stretch">
        <TextArea label="Enter a message" name="content" value={formState.content} onChange={(e) => formState.setContent(e.target.value)} />
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" alignItems="center" justifyContent="flex-end">
        {!!formState.link && <DisplayLink link={formState.link} />}
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" alignItems="center" justifyContent="flex-end">
        <ButtonWrapper>
          <button onClick={(e) => handleSubmit(e)}>Encrypt</button>
        </ButtonWrapper>
      </FlexGridEqual>

      <Loader loading={loading} />
      {alert.message && <Alert message={alert.message} type={alert.type} />}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    font-weight: 400;
    margin: 0 0.5rem;
  }

  p {
    font-weight: 300;
  }
`;

export default CreatePublicSignal;
