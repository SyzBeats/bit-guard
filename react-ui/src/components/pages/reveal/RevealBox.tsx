import styled from 'styled-components';
import { SignalMimeType } from '~/store/interfaces';

import { ContentBox } from '../../ui/styled/boxes/ContentBox';

interface Props {
  message: string;
  type: SignalMimeType;
}

const RevealBox = ({ message, type }: Props) => {
  const Element = () => {
    switch (type) {
      case 'text': {
        return <Content>{message}</Content>;
      }
      case 'image': {
        return (
          <ImageContainer>
            <img src={message} alt="secret" width="500" />
          </ImageContainer>
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

const Content = styled.div`
  // preserve text white space
  white-space: pre-wrap;
  width: 100%;
  word-wrap: break-word;

  max-height: 30vh;
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
