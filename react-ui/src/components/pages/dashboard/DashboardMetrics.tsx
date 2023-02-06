import React from 'react';

import { FlexGridEqual } from '~/components/layout/grids/FlexGrid';
import { ContentBox } from '~/components/ui/styled/boxes/ContentBox';
import Counter from '~/components/ui/styled/boxes/Counter';

const DashboardMetrics = () => {
  return (
    <FlexGridEqual padded equal>
      <ContentBox title="Active secrets / signals">
        <Counter type="signals" />
      </ContentBox>
      <ContentBox title="Active Secrets">
        <Counter type="message" />
      </ContentBox>
    </FlexGridEqual>
  );
};

export { DashboardMetrics };
