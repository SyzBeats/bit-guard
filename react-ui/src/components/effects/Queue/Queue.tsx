import React, { useLayoutEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';
import { Code, Layers, Figma, Database, Layout } from 'react-feather';

const Queue = () => {
  const staticItems = useMemo(() => {
    return [
      { text: 'Rest API development', key: 1 },
      { text: 'Graphql development', key: 2 },
      { text: 'UX design', key: 3 },
      { text: 'Static websites', key: 4 },
      { text: 'Frontend engineering', key: 5 },
    ];
  }, []);

  const [items, setItems] = useState(staticItems.slice(0, 5));

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        // slice existing array, remove the last item
        const addElem = staticItems.filter(
          (item) => !prev.some((i) => i.key === item.key),
        );
        const newShown = prev.slice(0, prev.length - 1);
        // take the one item that is not in the current list and append to front
        return [...addElem, ...newShown];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [staticItems]);

  const listTransition = useTransition(items, (item: any) => item.key, [
    {
      enter: { height: '3rem' },
      from: { height: 0 },
      leave: { height: '0rem' },
      config: config.slow,
    },
  ]);

  const getIcon = (text) => {
    switch (text) {
      case 'Rest API development':
        return <Database color="white" />;
      case 'Graphql development':
        return <Code color="white" />;
      case 'UX design':
        return <Figma color="white" />;
      case 'Static websites':
        return <Layout color="white" />;
      case 'Frontend engineering':
        return <Layers color="white" />;
      default:
        return null;
    }
  };

  return (
    <SkewContainer>
      <Wrapper>
        <ShadowTop />
        <TransitionContainer>
          {/** @ts-ignore */}
          {listTransition.map(({ item, props, key }, index) => (
            <ListItemWrapper key={key} index={index} style={props}>
              <ListIcon>{getIcon(item?.text)}</ListIcon>
              <ListText>{item?.text}</ListText>
            </ListItemWrapper>
          ))}
        </TransitionContainer>
        <ShadowBottom />
      </Wrapper>
    </SkewContainer>
  );
};

const SkewContainer = styled.div`
  position: relative;
  perspective: 500;
`;

const Wrapper = styled.div`
  flex-direction: column;
  height: 14rem;

  width: 30rem;
  margin: auto;
  z-index: 10;

  transform: rotate3d(2, -2, 0, 20deg);
  overflow: hidden;
`;

const TransitionContainer = styled.div`
  height: 100%;
`;
const Shadow = styled.div`
  height: 1rem;
  z-index: 100;
  width: 100%;
  background: #222;
  position: absolute;
`;

const ShadowTop = styled(Shadow)`
  background: linear-gradient(to bottom, #222 30%, transparent 70%);
  top: 0;
`;

const ShadowBottom = styled(Shadow)`
  background: linear-gradient(to top, #222 30%, transparent 70%);
  bottom: 0;
`;

const ListIcon = styled.div`
  flex: 1;
`;

const ListText = styled.div`
  flex: 6;
`;

// type for list item wrapper
type ListItemWrapperType = {
  index: number;
};

const ListItemWrapper = styled(animated.div)<ListItemWrapperType>`
  transform-origin: top;
  transition: all 0.3s;
  height: 3.35rem;
  width: 100%;
  margin-top: ${(props) => (props.index === 0 ? '0rem' : '0.5rem')};

  background: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(110deg, #13abe1 20%, white 20%);
  padding: 0 20px;
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);

  font-size: 20px;
  display: flex;
  align-items: center;
  font-weight: 600;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;
export { Queue };
