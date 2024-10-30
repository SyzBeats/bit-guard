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

const Wrapper = styled.footer`
  min-height: 30vh;
  background: ${({ theme }) => theme.colors.background};
  border-top: 0.5rem solid #2d95da;
  margin-top: 1rem;

  padding: 1rem;

  color: #fff;
`;
export default Footer;
