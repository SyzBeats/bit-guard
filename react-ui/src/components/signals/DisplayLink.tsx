import React from 'react';
import styled from 'styled-components';

import services from '../../services';

import { Copy, Check } from '~/components/icons/Icons';
import { useSignalState } from '~/store/store';

interface Props {
	link: string;
}

interface ContainerState {
	copied: boolean;
}

const DisplayLink = ({ link }: Props) => {
	// State
	const signalState = useSignalState((state) => ({
		linkCopied: state.linkCopied,
		setLinkCopied: state.setLinkCopied,
	}));


	// Handlers
	const handleClick = () => {
		services.ui.copyLinkToClipboard(link).catch((e) => console.error(e));
		signalState.setLinkCopied(true);
	};


	// Determine content
	const DisplayIcon = () => {
		if (signalState.linkCopied) {
			return <Check />;
		}

		return <Copy onClick={() => handleClick()} />;
	};

	return (
		<Container copied={signalState.linkCopied}>
			<CopySection>Secret Link (please copy): {<DisplayIcon />}</CopySection>
			<Wrapper>{link}</Wrapper>
		</Container>
	);
};

// --- Styled components ---

const Container = styled.div<ContainerState>`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  overflow: hidden;
  width: 100%;

  background: ${({ theme, copied }) => (copied ? '#085b41' : theme.gradients.login)};
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Wrapper = styled.div`
  font-family: monospace;
  width: 100%;
  height: 100%;
  display: flex;
  word-break: break-all;
`;

const CopySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export { DisplayLink };
