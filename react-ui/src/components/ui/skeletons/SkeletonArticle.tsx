import React from 'react';
import { Skeleton } from './Skeleton';
import { SkeletonWrapper } from './SkeletonWrapper';

interface Props {
  rounded?: boolean;
}

const SkeletonArticle = ({ rounded }: Props) => {
  return (
    <SkeletonWrapper bg="light" rounded={rounded}>
      <Skeleton shape="title" />
      <Skeleton shape="text" />
      <Skeleton shape="text" />
      <Skeleton shape="text" />
    </SkeletonWrapper>
  );
};

export { SkeletonArticle };
