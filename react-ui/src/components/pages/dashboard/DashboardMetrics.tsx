import React from 'react';
import { FlexGridEqual } from '../../layout/grids/FlexGrid';
import { ContentBox } from '../../ui/styled/boxes/ContentBox';
import Counter from '../../ui/styled/boxes/Counter';

const DashboardMetrics = () => {
  return (
    <FlexGridEqual padded equal>
      <ContentBox title="Alltime Created Secrets">
        <Counter type="signals" />
      </ContentBox>
      <ContentBox title="Active Secrets">
        <Counter type="message" />
      </ContentBox>
      <ContentBox title="Recent activity">
        <Counter type="message" />
      </ContentBox>
    </FlexGridEqual>
  );
};

export { DashboardMetrics };
