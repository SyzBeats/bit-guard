import React from 'react';
import { LayoutDashboard } from '../layout/dashboard/LayoutDashboard';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { ContentBox } from '../styled/boxes/ContentBox';

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <FlexGridEqual>
        <ContentBox title="Recent activity" />
        <ContentBox title="Current Secrets" />
        <ContentBox title="Recent activity" />
      </FlexGridEqual>
      <ContentBox title="Manage Secrets" />
    </LayoutDashboard>
  );
};

export default Dashboard;
