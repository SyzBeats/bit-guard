import React from 'react';
import { FlexGridEqual } from '../layout/grids/FlexGrid';
import { ContentBox } from '../styled/boxes/ContentBox';
import Counter from '../styled/boxes/Counter';

const DashboardMetrics = () => {
  return (
    <FlexGridEqual padded equal>
      <ContentBox title="Shared Secrets">
        <Counter />
      </ContentBox>
      <ContentBox title="One time Secrets">
        <Counter />
      </ContentBox>
      <ContentBox title="Recent activity">
        <Counter />
      </ContentBox>
    </FlexGridEqual>
  );
};

export { DashboardMetrics };
