import React, { useState } from 'react';
import { FilePlus } from 'react-feather';
import CreateSignal from '../forms/CreateSignal';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { MessageGrid } from '../layout/grids/MessageGrid';
import BaseModal from '../modals/BaseModal';
import { ContentBox } from '../styled/boxes/ContentBox';
import { ButtonRound } from '../styled/buttons/ButtonRound';
import { DashboardSectionTitle } from '../styled/typography';
import { Message } from './Signal';

const Signals = () => {
  const [messages] = useState([1, 2, 3, 4, 5]);
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);

  const submit = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <BaseModal handler={() => submit()}>
          <p>Some content</p>
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
          {messages.map((message, index) => (
            <Message key={index} />
          ))}
        </MessageGrid>
      </ContentBox>
    </>
  );
};

export { Signals };
