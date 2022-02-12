import React, { useState } from 'react';
import { FilePlus } from 'react-feather';

import { useSignalState } from '../../zustand/store';
import CreateSignal from '../forms/CreateSignal';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { MessageGrid } from '../layout/grids/MessageGrid';
import BaseModal from '../modals/BaseModal';
import { ContentBox } from '../styled/boxes/ContentBox';
import { ButtonRound } from '../styled/buttons/ButtonRound';
import { DashboardSectionTitle } from '../styled/typography';
import { Signal } from './Signal';

const Signals = () => {
  const { signals } = useSignalState();

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  const submit = () => {
    setOpen(false);
  };

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
          {signals.map((signal, index) => (
            <Signal key={index} signal={signal} />
          ))}
        </MessageGrid>
      </ContentBox>
    </>
  );
};

export { Signals };
