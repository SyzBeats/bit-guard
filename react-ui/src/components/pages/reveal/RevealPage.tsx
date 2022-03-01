import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../layout/generic/footer/Footer';
import { BaseContainer } from '../../ui/containers';
import Logo from '../../ui/styled/image/Logo';
import { SectionBackground, SectionBase } from '../../ui/styled/sections';
import CallToAction from '../landing/CallToAction';
import { RevealBox } from './RevealBox';

const RevealPage = () => {
  const params = useParams();

  console.log(params);
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
          <RevealBox />
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
