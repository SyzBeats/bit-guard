import React from 'react';
import Section from '../layout/container/Section';
import { LayoutDashboard } from '../layout/dashboard/LayoutDashboard';
import { MessageGrid } from '../layout/grids/MessageGrid';
import { Message } from '../message/Message';
import { ContentBox } from '../styled/boxes/ContentBox';
import { DashboardMetrics } from './DashboardMetrics';

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <DashboardMetrics />
      <Section>
        <h2>One time Messages</h2>
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
        <h2>Secrets</h2>
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
