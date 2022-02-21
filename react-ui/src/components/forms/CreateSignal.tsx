import { useMutation } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { CREATE_SIGNAL } from '../../graphql/mutations/signal/mutation-create-signal';

import { useCreateSecretFormState, useSignalState } from '../../zustand/store';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { FlexGridItem } from '../layout/grids/FlexGridItem';
import { DisplayLink } from '../signals/DisplayLink';
import { ButtonWrapper } from '../styled/buttons/ButtonWrapper';
import HorizontalToggle from './controls/HorizontalToggle';
import { TextArea } from './inputs/TextArea';
import TextInput from './inputs/TextInput';

const CreateSignal = () => {
  const addSignal = useSignalState((state) => state.addSignal);

  const { setContent, setTitle, title, content, link, setLink } = useCreateSecretFormState();

  const [createSignalMutation] = useMutation(CREATE_SIGNAL, {
    onCompleted: ({ createSignal }) => {
      const { id, title, link, createdAt } = createSignal;
      addSignal({ id, title, createdAt, link: link.content });
      setLink(link.content);
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
      <HorizontalToggle />
      <FlexGridEqual gap="1.5rem" justifyContent="stretch">
        <FlexGridItem alignSelf="stretch" flex="1">
          <TextInput label="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FlexGridItem>
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" justifyContent="stretch">
        <TextArea label="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" alignItems="center" justifyContent="flex-end">
        {!!link && <DisplayLink link={link} />}
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" alignItems="center" justifyContent="flex-end">
        <ButtonWrapper>
          <button onClick={(e) => handleSubmit(e)}>Add Signal</button>
        </ButtonWrapper>
      </FlexGridEqual>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding: 2rem 0;

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

export default CreateSignal;
