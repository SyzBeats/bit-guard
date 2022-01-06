import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../grids/Grid';

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
        <ListItem>SZ WEB Development</ListItem>
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
`;

export default FooterGrid;
