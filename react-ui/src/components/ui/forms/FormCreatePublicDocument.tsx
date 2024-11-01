import React, { useState } from 'react';
import styled from 'styled-components';
import { shallow } from 'zustand/shallow';
import { useMutation } from '@apollo/client';

import { useCreateSecretFormState, useSignalState } from '~/store/store';
import { CREATE_PUBLIC_SIGNAL } from '~/graphql/mutations/signal/mutation-create-public-signal';

import { FlexGridEqual } from '~/components/layout/grids/FlexGrid';
import { FlexGridItem } from '~/components/layout/grids/FlexGridItem';
import { DisplayLink } from '~/components/signals/DisplayLink';
import { Alert } from '~/components/ui/alert/Alert';
import { ButtonWrapper } from '~/components/ui/buttons/ButtonWrapper';
import { Loader } from '~/components/ui/loaders/Loader';
import TextInput from '~/components/ui/forms/inputs/TextInput';
import { FileDropzone } from '~/components/ui/forms/inputs/FileDropzone';
import { MessageTypes } from '~/types/enums';

const FormCreatePublicDocument = () => {
  const formState = useCreateSecretFormState(
    (state) => ({
      content: state.content,
      title: state.signalTitle,
      link: state.signalLink,
      type: state.type,
      extension: state.extension,
      setLink: state.setLink,
      setContent: state.setContent,
      setTitle: state.setTitle,
      setType: state.setType,
      setExtension: state.setExtension,
    }),
    shallow,
  );

  const signalState = useSignalState((state) => ({ setLinkCopied: state.setLinkCopied }), shallow);

  const [alert, setAlert] = useState({
    type: MessageTypes.INFO,
    message: '',
  });

  const [createSignalMutation, { loading = false }] = useMutation(CREATE_PUBLIC_SIGNAL, {
    onCompleted: ({ createPublicSignal }) => {
      formState.setLink(createPublicSignal?.link?.content);
      formState.setContent('');
      formState.setTitle('');
      signalState.setLinkCopied(false);
      setAlert({ type: MessageTypes.INFO, message: '' });
    },
    onError: (error) => {
      setAlert({ type: MessageTypes.ERROR, message: error.message });
      signalState.setLinkCopied(false);
    },
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!formState.title || !formState.content) {
      setAlert({ type: MessageTypes.ERROR, message: 'Please fill in all fields' });
      return;
    }

    createSignalMutation({
      variables: {
        title: formState.title,
        content: formState.content,
        extension: formState.extension,
        type: 'file',
      },
    });
  };

  return (
    <Wrapper>
      <FlexGridEqual gap='1.5rem' justifyContent='stretch'>
        <FlexGridItem alignSelf='stretch' flex='1'>
          <TextInput label='Enter a title' name='title' value={formState.title}
                     onChange={(e) => formState.setTitle(e.target.value)} />
        </FlexGridItem>
      </FlexGridEqual>

      <FileDropzone
        handleContent={(content: string) => formState.setContent(content)}
        handleExtension={(extension: string) => formState.setExtension(extension)}
      />

      <FlexGridEqual gap='1.5rem' alignItems='center' justifyContent='flex-end'>
        {!!formState.link && <DisplayLink link={formState.link} />}
      </FlexGridEqual>

      <FlexGridEqual gap='1.5rem' alignItems='center' justifyContent='flex-end'>
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

export default FormCreatePublicDocument;
