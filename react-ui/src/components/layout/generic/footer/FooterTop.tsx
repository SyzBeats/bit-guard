import React from 'react';
import styled from 'styled-components';

import Logo from '../../../ui/styled/image/Logo';

const FooterTop = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;
  border-bottom: 1px solid #f2f2f222;
`;
export default FooterTop;
