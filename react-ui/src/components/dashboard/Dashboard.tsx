import React from 'react';
import Section from '../layout/container/Section';
import { LayoutDashboard } from '../layout/dashboard/LayoutDashboard';
import { Message } from '../message/Message';
import { ContentBox } from '../styled/boxes/ContentBox';
import Button from '../styled/buttons';
import { DashboardMetrics } from './DashboardMetrics';

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <DashboardMetrics />
      <Section>
        <h2>One time Messages</h2>
        <ContentBox borderColor="dark" bordered={true} title="Overview">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
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
