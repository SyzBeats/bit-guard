import React, { useState, useRef } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { FilePlus, Trash } from '~/components/icons/Icons';
import { useSignalState } from '~/store/store';
import { GET_SIGNALS_BY_USER } from '~/graphql/queries/signal/query-signals-by-user';
import { FlexGridEqual } from '~/components/layout/grids/FlexGrid';
import CreateSignal from '~/components/ui/forms/FormCreateSignal';
import BaseModal from '~/components/ui/modals/BaseModal';
import { ContentBox } from '~/components/ui/styled/boxes/ContentBox';
import { ButtonRound } from '~/components/ui/buttons/ButtonRound';
import { DashboardSectionTitle } from '~/components/ui/styled/typography';
import ListComponent from '~/components/ui/list/List';
import services from '~/services';
import { DELETE_SIGNAL } from '~/graphql/mutations/signal/mutation-delete-signal';
import { TableRow } from '~/types/types-components';
import { ButtonWrapper } from '~/components/ui/buttons/ButtonWrapper';

const Signals = () => {
	// State
	const [open, setOpen] = useState(false);

	const signalState = useSignalState((state) => ({
		signals: state.signals,
		setSignals: state.setSignals,
		removeSignal: state.removeSignal,
	}));


	// Reference to access methods in the List component
	const listRef = useRef<{
		deselectAll: () => void;
		getSelected: () => TableRow[];
	}>(null);


	// Hooks
	useQuery(GET_SIGNALS_BY_USER, {
		onCompleted: ({ signalsByUser }) => {
			if (signalsByUser) {
				signalState.setSignals(signalsByUser);
			}
		},
	});

	const [deleteSignal] = useMutation(DELETE_SIGNAL, {
		onCompleted: (data) => {
			if (!data?.deleteSignal?.id) {
				console.error('[ERROR] Couldn\'t delete signal');
			}

			signalState.removeSignal(data?.deleteSignal?.id);
		},
		onError: (error) => {
			console.error(error.message);
		},
	});


	/**
	 * Handles the open action for the signal creation modal
	 */
	const handleOpenModal = () => setOpen(true);


	/**
	 * handles the close action of the signal creation modal
	 */
	const handleCloseModal = () => {
		setOpen(false);
	};


	/**
	 * Handles the deletion of a signal. The user
	 * needs to confirm this action by confirming a prompt.
	 * The action is passed into the rows rendered in the List component
	 */
	const handleDelete = (id: string): void => {
		if (!id) {
			return;
		}

		const confirmed = window.confirm('Are you sure? The secret will be destroyed and generated Links will not work afterwards');

		if (!confirmed) {
			return;
		}

		const variables = { id };

		deleteSignal({
			variables,
		});
	};


	/**
	 * Handle deletion of all selected secrets
	 */
	const handleDeleteAll = () => {
		const selected = listRef.current?.getSelected();

		if (!selected?.length) {
			return;
		}

		const confirmed = window.confirm('Are you sure? The secret will be destroyed and generated Links will not work afterwards');

		if (!confirmed) {
			return;
		}

		for (const secret of selected) {
			const variables = {
				id: secret.meta.id,
			};

			deleteSignal({
				variables,
			});
		}
	};


	// Determine List headers
	const headers = ['Title', 'Created at', 'Delete'];

	// Each item in the row array is rendered as List item
	const rows = signalState.signals.map((signal) => {
		return {
			content: [
				signal.title,
				services.dates.parseStringToLocaleDate(signal.createdAt),
				<Trash size={20} color='#01141F' onClick={() => handleDelete(signal.id)} />,
			],
			meta: { id: signal.id },
		};
	});

	const pageSize = rows.length % 20;


	// Determine Content
	return (
		<>
			{open && (
				<BaseModal title='Create your Secret' handler={() => handleCloseModal()} preventClickAway>
					<CreateSignal />
				</BaseModal>
			)}

			<FlexGridEqual
				gap='0rem'
				flexDirection='column'
				justifyContent='space-between'
				alignItems='flex-start'
				padded={false}
			>
				<DashboardSectionTitle>Signals</DashboardSectionTitle>
				<ButtonRound onClick={handleOpenModal}>
					<FilePlus />
				</ButtonRound>
			</FlexGridEqual>

			<ContentBox borderColor='dark' bordered={true} title='Your Secrets'>
				<ListComponent
					ref={listRef}
					headers={headers}
					rows={rows}
					selectable={true}
					pageSize={pageSize}
				/>
			</ContentBox>

			<ButtonWrapper>
				<button onClick={handleDeleteAll}>
					Delete all selected
				</button>
			</ButtonWrapper>
		</>
	);
};

export { Signals };
