import styled from 'styled-components';

import { PropsChildren } from '~/types/types-components';

const MessageGrid = ({ children }: PropsChildren) => {
  return <Grid>{children}</Grid>;
};

// --- styled components ---
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
`;

export { MessageGrid };
