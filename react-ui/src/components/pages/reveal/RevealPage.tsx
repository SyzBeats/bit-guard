import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Copy, CheckCircle } from 'react-feather';
import styled from 'styled-components';

import Logo from '~/components/ui/styled/image/Logo';
import Footer from '~/components/layout/generic/footer/Footer';
import CallToAction from '~/components/pages/home/CallToAction';
import { SectionBackground, SectionBase } from '~/components/ui/styled/sections';
import { RevealBox } from './RevealBox';
import { BaseContainer } from '~/components/ui/containers/BaseContainer';
import { SkeletonArticle } from '~/components/ui/skeletons/SkeletonArticle';
import { ButtonWrapper } from '~/components/ui/buttons/ButtonWrapper';
import Button from '~/components/ui/buttons/Button';
import { SignalMimeType } from '~/store/interfaces';

import services from '~/services';
import config from '~/config/environment';

interface Props {
  isPublic?: boolean;
}

const RevealPage = ({ isPublic }: Props) => {
  const params = useParams();

  const [revealed, setRevealed] = useState({
    message: '',
    title: '',
    extension: '',
    type: 'text' as SignalMimeType,
    loading: true,
  });

  const [copied, setCopied] = useState(false);

  const mounted = useRef(false);

  const queryPath = isPublic ? 'api/public/publicSignal' : 'api/public/signal';

  const endpoint = `${config.API_URL}/${queryPath}/${params.secret}?key=${params.key}`;

  // render the content above the reveal box
  const getInfoContent = (): React.ReactNode => {
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
        <p>The secret has been decrypted & destroyed. Once you leave or reload the page, it will be lost forever!</p>
      </TextWrapper>
    );
  };

  // render the content within the reveal box
  const getRevealContent = (): React.ReactNode => {
    if (revealed.loading) {
      return (
        <>
          <RevealTitle>We are decrypting the secret...</RevealTitle>
          <SkeletonArticle rounded />
        </>
      );
    }

    return (
      <>
        <RevealTitle>{revealed.title}</RevealTitle>
        <RevealBox type={revealed.type} message={revealed.message || 'No message found...'} extension={revealed.extension} />
      </>
    );
  };

  const getButtonContent = (): React.ReactNode => {
    if (!revealed.title) {
      return null;
    }

    if (revealed.type !== 'text') {
      return null;
    }

    return (
      <ButtonWrapper>
        <Button
          onClick={() => {
            services.ui.copyLinkToClipboard(revealed?.message ?? '');
            setCopied(true);
          }}
          content={
            <>
              {copied ? <CheckCircle color="#6cdf8f" size={20} /> : <Copy size={20} />}
              <span>{copied ? 'Copied!' : 'Copy secret'}</span>
            </>
          }
        />
      </ButtonWrapper>
    );
  };

  const fetchData = useCallback(async () => {
    try {
      const data = await (await fetch(endpoint)).json();

      if (data.error) {
        throw new Error(data.error);
      }

      setRevealed({
        ...data,
        loading: false,
      });
    } catch {
      setRevealed({
        title: '',
        message: 'We could not find the secret you were looking for. Sorry!',
        type: 'text',
        extension: '',
        loading: false,
      });
    }
  }, []);

  useEffect(() => {
    if (!params.secret || !params.key) {
      return;
    }

    if (revealed.message || mounted.current) {
      return;
    }

    fetchData();

    if (!mounted.current) {
      mounted.current = true;
    }
  }, [fetchData]);

  return (
    <>
      <SectionBackground>
        <BaseContainer padding="5rem 2rem">
          <FlexWrapper>
            <Logo width="5rem" />
          </FlexWrapper>
          {getInfoContent()}
          {getRevealContent()}
          {getButtonContent()}
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
