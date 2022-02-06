import React from 'react';
import { FilePlus } from 'react-feather';
import Section from '../layout/container/Section';
import { LayoutDashboard } from '../layout/dashboard/LayoutDashboard';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { MessageGrid } from '../layout/grids/MessageGrid';
import { Message } from '../message/Message';
import { ContentBox } from '../styled/boxes/ContentBox';
import { ButtonRound } from '../styled/buttons/ButtonRound';
import { DashboardSectionTitle } from '../styled/typography';
import { DashboardMetrics } from './DashboardMetrics';

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <DashboardMetrics />
      <Section>
        <FlexGridEqual gap="0rem" flexDirection="column" justifyContent="space-between" alignItems="flex-start" padded={false}>
          <DashboardSectionTitle>Signals</DashboardSectionTitle>
          <ButtonRound>
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
      </Section>

      <Section>
        <FlexGridEqual gap="0rem" flexDirection="column" justifyContent="space-between" alignItems="flex-start" padded={false}>
          <DashboardSectionTitle>Secrets</DashboardSectionTitle>
          <ButtonRound>
            <FilePlus />
          </ButtonRound>
        </FlexGridEqual>
        <ContentBox bordered={true} title="Overview">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </ContentBox>
      </Section>
    </LayoutDashboard>
  );
};

export default Dashboard;
