import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { QueueItem } from './QueueItem';

const TIMEOUT = 2000;

const Queue = () => {
	const staticItems = [
		'Military grade encryption',
		'Expiry management',
		'Simple user interface',
		'Protected secrets',
		'Simplified sharing function',
		'Smart deletion',
	];

	const [items, setItems] = useState(staticItems.slice(0, 6));

	useLayoutEffect(() => {
		const interval = setInterval(() => {
			setItems((prev) => {
				const nextTop = prev[prev.length - 1];
				const newShown = prev.slice(0, prev.length - 1);

				return [nextTop, ...newShown];
			});
		}, TIMEOUT);

		return () => clearInterval(interval);
	}, []);

	return (
		<SkewContainer>
			<Wrapper>
				<ShadowTop />
				<TransitionContainer>
					{items.map((item, i) => i !== items.length - 1 &&
						<QueueItem key={Math.random()} index={i} content={item} />)}
				</TransitionContainer>
				<ShadowBottom />
			</Wrapper>
		</SkewContainer>
	);
};

const SkewContainer = styled.div`
  position: relative;
  perspective: 30rem;
`;

const Wrapper = styled.div`
  flex-direction: column;
  height: 22rem;
  width: 45rem;
  margin: auto;
  transform: rotate3d(2, -2, 0, 20deg);
  overflow: hidden;
  z-index: 10;
`;

const TransitionContainer = styled.div`
  height: 100%;
`;

const Shadow = styled.div`
  position: absolute;
  height: 1rem;
  width: 100%;
  background: #222;
  z-index: 100;
`;

const ShadowTop = styled(Shadow)`
  top: 0;
  background: linear-gradient(to bottom, #0a0a0a 30%, transparent 70%);
`;

const ShadowBottom = styled(Shadow)`
  bottom: 0;
  background: linear-gradient(to top, #0a0a0a 30%, transparent 70%);
`;

export { Queue };
