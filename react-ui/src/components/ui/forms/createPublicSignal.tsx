import { useMutation } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { CREATE_PUBLIC_SIGNAL } from '../../../graphql/mutations/signal/mutation-create-public-signal';

import { useCreateSecretFormState } from '../../../zustand/store';
import { FlexGridEqual } from '../../layout/grids/FlexGrid';
import { FlexGridItem } from '../../layout/grids/FlexGridItem';
import { DisplayLink } from '../../signals/DisplayLink';
import { ButtonWrapper } from '../buttons/ButtonWrapper';
import { TextArea } from './inputs/TextArea';
import TextInput from './inputs/TextInput';

const CreatePublicSignal = () => {
  const { setContent, setTitle, title, content, link, setLink } = useCreateSecretFormState();

  const [createSignalMutation] = useMutation(CREATE_PUBLIC_SIGNAL, {
    onCompleted: ({ createPublicSignal }) => {
      setLink(createPublicSignal?.link?.content);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

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
