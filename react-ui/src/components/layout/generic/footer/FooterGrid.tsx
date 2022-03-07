import React from 'react';
import styled from 'styled-components';

const FooterGrid = () => {
  return (
    <Wrapper>
      <List>
        <ListTitle>Quick Links</ListTitle>
        <ListItem>Login</ListItem>
        <ListItem>Blog</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      <List>
        <ListTitle>Tutorials</ListTitle>
        <ListItem>Create a Message</ListItem>
        <ListItem>Share a Link</ListItem>
        <ListItem>Our Encryption</ListItem>
      </List>
      <List>
        <ListTitle>About us</ListTitle>
        <ListItem>
          <a href="https://sz-development.com">SZ WEB Development</a>
        </ListItem>
        <ListItem>Data protection</ListItem>
        <ListItem>Imprint</ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  max-width: 1400px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
`;

const ListTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin: 0 0 2rem 0;
`;

const ListItem = styled.li`
  font-weight: 100;
  letter-spacing: 0.1rem;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight_iceblue};
    }
  }
`;

export default FooterGrid;
