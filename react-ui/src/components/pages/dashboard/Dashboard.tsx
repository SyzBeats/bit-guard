import React from 'react';

import Section from '../../layout/container/Section';
import { LayoutDashboard } from '../../layout/dashboard/LayoutDashboard';
import { Signals } from '../../signals/Signals';
import { DashboardMetrics } from './DashboardMetrics';

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <DashboardMetrics />
      <Section>
        <Signals />
      </Section>
    </LayoutDashboard>
  );
};

export default Dashboard;
