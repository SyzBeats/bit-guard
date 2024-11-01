import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FilePlus } from 'react-feather';

import { Signal } from './Signal';

import { useSignalState } from '~/store/store';
import { GET_SIGNALS_BY_USER } from '~/graphql/queries/signal/query-signals-by-user';
import { FlexGridEqual } from '~/components/layout/grids/FlexGrid';
import { MessageGrid } from '~/components/layout/grids/MessageGrid';
import CreateSignal from '~/components/ui/forms/FormCreateSignal';
import BaseModal from '~/components/ui/modals/BaseModal';
import { ContentBox } from '~/components/ui/styled/boxes/ContentBox';
import { ButtonRound } from '~/components/ui/buttons/ButtonRound';
import { DashboardSectionTitle } from '~/components/ui/styled/typography';

const Signals = () => {
  // State
  const [open, setOpen] = useState(false);

  const signalState = useSignalState((state) => ({ signals: state.signals, setSignals: state.setSignals }));

  // Handlers
  const handleOpenModal = () => setOpen(true);

  const handleCloseModal = () => {
    setOpen(false);
  };

  useQuery(GET_SIGNALS_BY_USER, {
    onCompleted: ({ signalsByUser }) => {
      if (signalsByUser) {
        signalState.setSignals(signalsByUser);
      }
    },
  });

  return (
    <>
      {open && (
        <BaseModal title="Create your Secret" handler={() => handleCloseModal()} preventClickAway>
          <CreateSignal />
        </BaseModal>
      )}

      <FlexGridEqual gap="0rem" flexDirection="column" justifyContent="space-between" alignItems="flex-start" padded={false}>
        <DashboardSectionTitle>Signals</DashboardSectionTitle>

        <ButtonRound onClick={handleOpenModal}>
          <FilePlus />
        </ButtonRound>
      </FlexGridEqual>

      <ContentBox borderColor="dark" bordered={true} title="Overview">
        <MessageGrid>{signalState.signals?.map((signal, index) => <Signal key={index} signal={signal} />)}</MessageGrid>
      </ContentBox>
    </>
  );
};

export { Signals };
