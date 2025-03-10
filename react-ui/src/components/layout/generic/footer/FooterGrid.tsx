import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterGrid = () => {
	return (
		<Wrapper>
			<List>
				<ListTitle>External Links</ListTitle>
				<ListItem>
					<a href='https://github.com/SyzBeats/envite' rel='noopener noreferrer' target='_blank'>
						GitHub
					</a>
				</ListItem>
				<ListItem>
					<a href='https://sz-development.tech/kontakt' rel='noopener noreferrer' target='_blank'>
						Contact
					</a>
				</ListItem>
				<ListItem>
					<a href='https://sz-development.tech/blog' rel='noopener noreferrer' target='_blank'>
						Blog
					</a>
				</ListItem>
			</List>

			<List>
				<ListTitle>Tutorials (soon)</ListTitle>
				<ListItem>Create a Message</ListItem>
				<ListItem>Share a Link</ListItem>
				<ListItem>Our Encryption</ListItem>
			</List>

			<List>
				<ListTitle>About us</ListTitle>
				<ListItem>
					<a rel='noopener noreferrer' target='_blank' href='https://sz-development.tech/'>
						SZ WEB Development
					</a>
				</ListItem>
				<ListItem>
					<Link to='/dataprotection'>Data Protection</Link>
				</ListItem>
				<ListItem>
					<Link to='/imprint'>Imprint</Link>
				</ListItem>
			</List>
		</Wrapper>
	);
};


// --- Styled components ---

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
      color: ${({ theme }) => theme.colors.iceblue};
    }
  }
`;

export default FooterGrid;
