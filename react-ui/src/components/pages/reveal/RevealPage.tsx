import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import config from '../../../config/env';
import Logo from '../../ui/styled/image/Logo';
import Footer from '../../layout/generic/footer/Footer';
import CallToAction from '../landing/CallToAction';
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

  console.log(endpoint);

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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '5rem',
            }}
          >
            <Logo />
          </div>
          <h1>Secret Decryption</h1>
          <RevealBox message={revealed.message} />
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

export { RevealPage };
