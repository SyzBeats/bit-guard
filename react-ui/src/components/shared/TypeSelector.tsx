import React, { useState } from 'react';
import styled from 'styled-components';

interface ISelectorProps {
  type: 'text' | 'image' | 'video' | 'audio' | 'file';
}

const Selector = (props: ISelectorProps) => {
  return <SelectorContainer>{props.type}</SelectorContainer>;
};

const TypeSelector = () => {
  type Selections = 'text' | 'image' | 'video' | 'audio' | 'file';

  const [type, setType] = useState<Selections>('text');

  return (
    <Container>
      <Selector type={'text'} />
      <Selector type={'image'} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: ${({ theme }) => theme.colors.highlight_iceblue_10};
  color: ${({ theme }) => theme.colors.highlight_iceblue};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.card_1};
  margin: 2rem 0;
`;

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 2rem;
  flex: 1;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.highlight_iceblue_10};
  border: 1px solid ${({ theme }) => theme.colors.highlight_iceblue};

  cursor: pointer;
`;

export default TypeSelector;
