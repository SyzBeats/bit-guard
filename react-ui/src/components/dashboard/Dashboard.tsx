import React from 'react';
import Section from '../layout/container/Section';
import { LayoutDashboard } from '../layout/dashboard/LayoutDashboard';
import { BaseContainer } from '../styled/containers';
import { DashboardMetrics } from './DashboardMetrics';

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <DashboardMetrics />
      <Section>
        <h2>Your Secrets</h2>
      </Section>
      <Section>
        <h2>One time Messages</h2>
      </Section>
    </LayoutDashboard>
  );
};

export default Dashboard;
