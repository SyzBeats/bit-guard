import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../layout/generic/footer/Footer';
import { BaseContainer } from '../../ui/containers';
import Logo from '../../ui/styled/image/Logo';
import { SectionBackground, SectionBase } from '../../ui/styled/sections';
import CallToAction from '../landing/CallToAction';
import { RevealBox } from './RevealBox';

interface Props {
  isPublic?: boolean;
}

const RevealPage = ({ isPublic }: Props) => {
  const params = useParams();

  const [revealed, setRevealed] = useState({
    message: '',
  });

  const apiPath = isPublic ? 'public/publicSignal' : 'public/signal';

  useEffect(() => {
    async function fetchData() {
      if (!params.secret || !params.key) {
        return;
      }

      const data = await (await fetch(`http://localhost:4000/${apiPath}/${params.secret}?key=${params.key}`)).json();

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
