import React, { useState } from 'react';
import { FilePlus } from 'react-feather';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { MessageGrid } from '../layout/grids/MessageGrid';
import BaseModal from '../modals/BaseModal';
import { ContentBox } from '../styled/boxes/ContentBox';
import { ButtonRound } from '../styled/buttons/ButtonRound';
import { DashboardSectionTitle } from '../styled/typography';
import { Message } from './Signal';

const Signals = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  return (
    <>
      {open && <BaseModal handler={() => setOpen(false)}>test</BaseModal>}
      <FlexGridEqual gap="0rem" flexDirection="column" justifyContent="space-between" alignItems="flex-start" padded={false}>
        <DashboardSectionTitle>Signals</DashboardSectionTitle>
        <ButtonRound onClick={openModal}>
          <FilePlus />
        </ButtonRound>
      </FlexGridEqual>

      <ContentBox borderColor="dark" bordered={true} title="Overview">
        <MessageGrid>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </MessageGrid>
      </ContentBox>
    </>
  );
};

export { Signals };
