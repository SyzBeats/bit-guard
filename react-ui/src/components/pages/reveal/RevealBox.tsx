import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { SignalMimeType } from '~/store/interfaces';
import { ContentBox } from '~/components/ui/styled/boxes/ContentBox';


interface Props {
	message: string;
	type: SignalMimeType;
	extension: string;
}

const RevealBox = ({ message, type }: Props) => {
	// Ensure user really wants to download the file.
	// Since this might impose a security risk on the side of the
	// user we need to guarantee, that the user understood the risk
	// of downloading a file onto his machine.
	const [sure, setSure] = useState(false);


	useEffect(() => {
		if (type === 'file') {
			const isSure = window.confirm('[SECURITY NOTE]:\n\nYou are about to display a PDF file. \nOnly proceed if you fully trust the sender.');
			setSure(isSure);
		}
	}, []);

	const Element = () => {
		switch (type) {
			case 'text': {
				return <Content>{message}</Content>;
			}

			case 'image': {
				return (
					<ImageContainer>
						<img src={message} alt='secret' width='500' />
					</ImageContainer>
				);
			}

			case 'file': {
				if (!sure) {
					return <p>You have not confirmed to view the file. It has been destroyed</p>;
				}

				return (
					<Content>
						<object type='application/pdf' data={message} width='100%' height='400' />
					</Content>
				);
			}

			default: {
				return <Content>{message}</Content>;
			}
		}
	};

	return (
		<ContentBox>
			<Element />
		</ContentBox>
	);
};

// --- styled components ---

const Content = styled.div`
  // preserve text white space
  white-space: pre-wrap;
  width: 100%;
  word-wrap: break-word;

  max-height: 40vh;
  font-family: monospace;
  letter-spacing: 0.1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  img {
    width: 80%;
    max-width: 60rem;
    max-height: 40rem;
    object-fit: contain;
    border-radius: 0.5rem;
  }
`;

export { RevealBox };
