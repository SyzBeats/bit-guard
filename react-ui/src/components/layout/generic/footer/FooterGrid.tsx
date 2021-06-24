import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../grids/Grid';

const FooterGrid = () => {
  return (
    <Wrapper>
      <Grid columns={4} gap={'2rem'} rows={1}>
        <List>
          <ListTitle>Quick Links</ListTitle>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
        </List>
        <List>
          <ListTitle>Tutorials</ListTitle>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
        </List>
        <List>
          <ListTitle>About us</ListTitle>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
        </List>
        <List>
          <ListTitle>Legal</ListTitle>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
        </List>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  max-width: 1400px;
  margin: auto;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const ListTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin: 0 0 2rem 0;
`;

const ListItem = styled.li``;

export default FooterGrid;
