import styled from 'styled-components';

import { PropsChildren } from '~/types/types-components';

const Section = ({ children }: PropsChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

// --- Styled components ---

const Wrapper = styled.section`
  padding: 2rem;

  h2 {
    margin: 2rem 0;
  }
`;

export default Section;
