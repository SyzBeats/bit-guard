import React from 'react';
import styled from 'styled-components';

import { useCreateSecretFormState, useSignalState } from '../../zustand/store';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { FlexGridItem } from '../layout/grids/FlexGridItem';
import { ButtonWrapper } from '../styled/buttons/ButtonWrapper';
import HorizontalToggle from './controls/HorizontalToggle';
import { TextArea } from './inputs/TextArea';
import TextInput from './inputs/TextInput';

const CreateSignal = () => {
  const addSignal = useSignalState((state) => state.addSignal);
  const { setContent, setTitle, title, content } = useCreateSecretFormState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addSignal({ id: `${Math.random()}`, title: 'Some signal', createdAt: Date.now() });
  };

  return (
    <Wrapper>
      <HorizontalToggle />
      <FlexGridEqual gap="1.5rem" justifyContent="stretch">
        <FlexGridItem alignSelf="stretch" flex="1">
          <TextInput label="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FlexGridItem>

        <FlexGridItem alignSelf="stretch" flex="1">
          <TextInput label="other label" name="title2" value="Some signal" onChange={(e) => null} />
        </FlexGridItem>
      </FlexGridEqual>

      <FlexGridEqual gap="1.5rem" justifyContent="stretch">
        <TextArea label="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
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
