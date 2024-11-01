import React from 'react';

import { Skeleton } from './Skeleton';
import { SkeletonWrapper } from './SkeletonWrapper';

const SkeletonBlock = () => {
  return (
    <SkeletonWrapper bg="light">
      <Skeleton shape="block" />
    </SkeletonWrapper>
  );
};

export { SkeletonBlock };
