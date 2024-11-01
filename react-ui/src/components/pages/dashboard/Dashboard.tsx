import { Signals } from '../../signals/Signals';
import { DashboardMetrics } from './DashboardMetrics';

import Section from '~/components/layout/container/Section';
import { LayoutDashboard } from '~/components/layout/dashboard/LayoutDashboard';

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
