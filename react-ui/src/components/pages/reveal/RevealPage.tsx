import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import config from '../../../config/environment';
import Logo from '../../ui/styled/image/Logo';
import Footer from '../../layout/generic/footer/Footer';
import CallToAction from '../home/CallToAction';
import { SectionBackground, SectionBase } from '../../ui/styled/sections';
import { RevealBox } from './RevealBox';
import { BaseContainer } from '../../ui/containers';
interface Props {
  isPublic?: boolean;
}

const RevealPage = ({ isPublic }: Props) => {
  const params = useParams();

  const [revealed, setRevealed] = useState({
    message: '',
  });

  const queryPath = isPublic ? 'api/public/publicSignal' : 'api/public/signal';

  const endpoint = `${config.API_URL}/${queryPath}/${params.secret}?key=${params.key}`;

  useEffect(() => {
    async function fetchData() {
      if (!params.secret || !params.key) {
        return;
      }

      const data = await (await fetch(endpoint)).json();

      setRevealed(data);
    }

    fetchData();
  }, [params]);

  return (
    <>
      <SectionBackground>
        <BaseContainer>
          <FlexWrapper>
            <Logo />
          </FlexWrapper>

          <TextWrapper>
            <h1>Secret Decryption</h1>

            {revealed.message && (
              <p>
                This is the secret message you were looking for. It has been destroyed now that you viewed it. Once you reload the page, it
                will be lost forever!
              </p>
            )}
          </TextWrapper>

          <RevealBox message={revealed.message || 'No message found...'} />
        </BaseContainer>
      </SectionBackground>

      <SectionBase>
        <BaseContainer>
          <CallToAction />
        </BaseContainer>
      </SectionBase>

      <Footer />
    </>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

const TextWrapper = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`;

export { RevealPage };
