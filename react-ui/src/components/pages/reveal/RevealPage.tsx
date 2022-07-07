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
import { SkeletonArticle } from '../../ui/skeletons/SkeletonArticle';
interface Props {
  isPublic?: boolean;
}

const RevealPage = ({ isPublic }: Props) => {
  const params = useParams();

  const [revealed, setRevealed] = useState({
    message: '',
    title: '',
    loading: true,
  });

  const queryPath = isPublic ? 'api/public/publicSignal' : 'api/public/signal';

  const endpoint = `${config.API_URL}/${queryPath}/${params.secret}?key=${params.key}`;

  const getInfoContent = () => {
    if (revealed.loading) {
      return (
        <TextWrapper>
          <h1>Loading</h1>
          <p>The secret is about to be revealed</p>
        </TextWrapper>
      );
    }

    return (
      <TextWrapper>
        <h1>The secret was decrypted</h1>
        <p>
          This is the secret you were looking for. It has been destroyed now that you viewed it. Once you leave or reload the page, it will
          be lost forever!
        </p>
      </TextWrapper>
    );
  };

  const getRevealContent = () => {
    if (revealed.loading) {
      return (
        <>
          <RevealTitle>We are solving the mystery...</RevealTitle>
          <SkeletonArticle rounded />
        </>
      );
    }

    return (
      <>
        <RevealTitle>{revealed.title}</RevealTitle>
        <RevealBox message={revealed.message || 'No message found...'} />
      </>
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (!params.secret || !params.key) {
          return;
        }

        const data = await (await fetch(endpoint)).json();

        if (data.error) {
          throw new Error(data.error);
        }

        setRevealed({ ...data, loading: false });
      } catch {
        setRevealed({
          message: 'We could not find the secret you were looking for. Sorry!',
          title: 'No Data found',
          loading: false,
        });
      }
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
          {getInfoContent()}
          {getRevealContent()}
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

const RevealTitle = styled.h2`
  margin: 4rem 0 2rem 0;
  font-size: 2rem;
  font-weight: 400;
`;

export { RevealPage };
