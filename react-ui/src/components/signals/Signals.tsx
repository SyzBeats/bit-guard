import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FilePlus } from 'react-feather';

import { useSignalState } from '../../zustand/store';
import { GET_SIGNALS_BY_USER } from '../../graphql/queries/signal/query-signals-by-user';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { MessageGrid } from '../layout/grids/MessageGrid';
import { Signal } from './Signal';
import CreateSignal from '../ui/forms/CreateSignal';
import BaseModal from '../ui/modals/BaseModal';

import { ContentBox } from '../styled/boxes/ContentBox';
import { ButtonRound } from '../styled/buttons/ButtonRound';
import { DashboardSectionTitle } from '../styled/typography';

const Signals = () => {
  const [open, setOpen] = useState(false);

  const signalState = useSignalState((state) => ({ signals: state.signals, setSignals: state.setSignals }));

  useQuery(GET_SIGNALS_BY_USER, {
    onCompleted: ({ signalsByUser }) => {
      if (signalsByUser) {
        signalState.setSignals(signalsByUser);
      }
    },
  });

  const openModal = () => setOpen(true);

  const submit = () => setOpen(false);

  return (
    <>
      {open && (
        <BaseModal title="Create your Secret" handler={() => submit()}>
          <CreateSignal />
        </BaseModal>
      )}

      <FlexGridEqual gap="0rem" flexDirection="column" justifyContent="space-between" alignItems="flex-start" padded={false}>
        <DashboardSectionTitle>Signals</DashboardSectionTitle>
        <ButtonRound onClick={openModal}>
          <FilePlus />
        </ButtonRound>
      </FlexGridEqual>

      <ContentBox borderColor="dark" bordered={true} title="Overview">
        <MessageGrid>
          {signalState.signals?.map((signal, index) => (
            <Signal key={index} signal={signal} />
          ))}
        </MessageGrid>
      </ContentBox>
    </>
  );
};

export { Signals };
