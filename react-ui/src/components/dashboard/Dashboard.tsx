import React from 'react';
import { LayoutDashboard } from '../layout/dashboard/LayoutDashboard';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { ContentBox } from '../styled/boxes/ContentBox';
import Counter from '../styled/boxes/Counter';

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <FlexGridEqual>
        <ContentBox title="Total Secrets">
          <Counter />
        </ContentBox>
        <ContentBox title="Open Secrets">
          <Counter />
        </ContentBox>
        <ContentBox title="Views">
          <Counter />
        </ContentBox>
      </FlexGridEqual>
    </LayoutDashboard>
  );
};

export default Dashboard;
