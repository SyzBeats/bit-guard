import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { CREATE_PUBLIC_SIGNAL } from '../../../graphql/mutations/signal/mutation-create-public-signal';

import { useCreateSecretFormState } from '../../../zustand/store';
import { FlexGridEqual } from '../../layout/grids/FlexGrid';
import { FlexGridItem } from '../../layout/grids/FlexGridItem';
import { DisplayLink } from '../../signals/DisplayLink';
import { Alert } from '../alert/Alert';
import { ButtonWrapper } from '../buttons/ButtonWrapper';
import { TextArea } from './inputs/TextArea';
import TextInput from './inputs/TextInput';

const CreatePublicSignal = () => {
  const { setContent, setTitle, title, content, link, setLink } = useCreateSecretFormState();

  const [alert, setAlert] = useState({
    type: '',
    message: '',
  });

  const [createSignalMutation] = useMutation(CREATE_PUBLIC_SIGNAL, {
    onCompleted: ({ createPublicSignal }) => {
      setLink(createPublicSignal?.link?.content);
      setAlert({ type: 'success', message: '' });
    },
    onError: (error) => {
      setAlert((prev) => ({
        ...prev,
        type: 'error',
        message: error.message,
      }));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      setAlert({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    createSignalMutation({
      variables: {
        title,
        content,
      },
    });
  };

  return (
    <Wrapper>
      <FlexGridEqual gap="1.5rem" justifyContent="stretch">
        <FlexGridItem alignSelf="stretch" flex="1">
          <TextInput label="Enter a title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FlexGridItem>
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" justifyContent="stretch">
        <TextArea label="Your message content" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" alignItems="center" justifyContent="flex-end">
        {!!link && <DisplayLink link={link} />}
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" alignItems="center" justifyContent="flex-end">
        <ButtonWrapper>
          <button onClick={(e) => handleSubmit(e)}>Create a Signal</button>
        </ButtonWrapper>
      </FlexGridEqual>
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
