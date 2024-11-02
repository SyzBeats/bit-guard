import { useMutation } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';

import { DisplayLink } from '../../signals/DisplayLink';
import { ButtonWrapper } from '../buttons/ButtonWrapper';
import HorizontalToggle from './controls/HorizontalToggle';
import { TextArea } from './inputs/TextArea';
import TextInput from './inputs/TextInput';

import { FlexGridItem } from '~/components/layout/grids/FlexGridItem';
import { FlexGridEqual } from '~/components/layout/grids/FlexGrid';
import { useCreateSecretFormState, useSignalState } from '~/store/store';
import { CREATE_SIGNAL } from '~/graphql/mutations/signal/mutation-create-signal';
import { Signal } from '~/store/interfaces';

const CreateSignal = () => {
	const addSignal = useSignalState((state) => state.addSignal);

	const { setContent, setTitle, title, content, link, setLink } = useCreateSecretFormState();

	const [createSignalMutation] = useMutation(CREATE_SIGNAL, {
		onCompleted: ({ createSignal: created }) => {
			addSignal({
				id: created.id,
				title: created.title,
				createdAt: created.createdAt,
				link: created.link.content,
			} as unknown as Signal);
			setLink(created.link.content);
		},
		onError: (error) => {
			console.error(error.message);
		},
	});

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
			<FlexGridEqual gap='1.5rem' justifyContent='stretch'>
				<FlexGridItem alignSelf='stretch' flex='1'>
					<TextInput label='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
				</FlexGridItem>
			</FlexGridEqual>

			<FlexGridEqual gap='1.5rem' justifyContent='stretch'>
				<TextArea label='content' name='content' value={content} onChange={(e) => setContent(e.target.value)} />
			</FlexGridEqual>

			<FlexGridEqual gap='1.5rem' alignItems='center' justifyContent='flex-end'>
				{!!link && <DisplayLink link={link} />}
			</FlexGridEqual>

			<FlexGridEqual gap='1.5rem' alignItems='center' justifyContent='flex-end'>
				<ButtonWrapper>
					<button onClick={(e) => handleSubmit(e)}>Add Signal</button>
				</ButtonWrapper>
			</FlexGridEqual>
		</Wrapper>
	);
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem 0;

  h4 {
    font-weight: 400;
    margin: 0 0.5rem;
  }

  p {
    font-weight: 300;
  }
`;

export default CreateSignal;
