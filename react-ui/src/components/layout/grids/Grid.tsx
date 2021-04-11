import React from 'react';
import styled from 'styled-components';

type GridType = {
  columns: number;
  rows: number;
  rowHeight?: string;
  gap?: string;
  children?: React.ReactNode;
};

const Grid = ({
  columns,
  rows,
  gap = '3rem',
  rowHeight = '25rem',
  children,
}: GridType) => {
  return (
    <Wrapper columns={columns} rows={rows} gap={gap} rowHeight={rowHeight}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<GridType>`
  display: grid;
  width: 100%;

  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows, rowHeight }) =>
    `repeat(${rows}, ${rowHeight} )`};
  gap: ${({ gap }) => gap};
`;

export { Grid };
