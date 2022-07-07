import React from 'react';
import styled from 'styled-components';

interface Props {
  shape?: 'text' | 'title' | 'avatar' | 'thumbnail' | 'block';
}

const Skeleton = ({ shape }: Props) => {
  switch (shape) {
    case 'text':
      return <SkeletonText />;
    case 'title':
      return <SkeletonTitle />;
    case 'avatar':
      return <SkeletonAvatar />;
    case 'thumbnail':
      return <SkeletonThumbnail />;
    case 'block':
      return <SkeletonBlock />;
    default:
      return <SkeletonText />;
  }
};

const SkeletonBase = styled.div`
  background: #ddd;
  margin: 10px 0;
  border-radius: 4px;
`;

const SkeletonText = styled(SkeletonBase)`
  width: 100%;
  height: 1em;
`;

const SkeletonTitle = styled(SkeletonBase)`
  width: 50%;
  height: 1.4em;
  margin-bottom: 15px;
`;

const SkeletonAvatar = styled(SkeletonBase)`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

const SkeletonThumbnail = styled(SkeletonBase)`
  width: 8rem;
  height: 8rem;
`;

const SkeletonBlock = styled(SkeletonBase)`
  width: 100%;
  height: 12rem;
`;

export { Skeleton };
