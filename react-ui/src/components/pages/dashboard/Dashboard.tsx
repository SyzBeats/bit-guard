import { Signals } from '../../signals/Signals';

import Section from '~/components/layout/container/Section';
import { LayoutDashboard } from '~/components/layout/dashboard/LayoutDashboard';

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <Section>
        <Signals />
      </Section>
    </LayoutDashboard>
  );
};

export default Dashboard;
