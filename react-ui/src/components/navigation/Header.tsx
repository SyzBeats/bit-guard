import React from 'react';
import styled from 'styled-components';
import Avatar from '../user/Avatar';

const Header = () => {
  return (
    <Wrapper>
      <Avatar src="https://source.unsplash.com/random" alt="avatar" />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 1rem 2rem;
  height: 9rem;
  background: #eee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default Header;
