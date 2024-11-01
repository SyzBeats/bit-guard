import styled from 'styled-components';

import FooterGrid from './FooterGrid';
import FooterTop from './FooterTop';

const Footer = () => {
  return (
    <Wrapper>
      <FooterTop />
      <FooterGrid />
    </Wrapper>
  );
};

// --- Styled components ---

const Wrapper = styled.footer`
  min-height: 30vh;
  margin-top: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  color: #fff;
  border-top: 0.5rem solid #2d95da;
`;
export default Footer;
