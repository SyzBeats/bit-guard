import styled from 'styled-components';

interface IProps {
	loading: boolean;
}

const Loader = (props: IProps) => {
	if (!props.loading) {
		return null;
	}

	return (
		<Wrapper>
			<Dot1 />
			<Dot2 />
			<Dot3 />
		</Wrapper>
	);
};

// --- Styled components ---
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  gap: 2rem;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightblue};
  animation: pulse 0.9s infinite;
`;

const Dot1 = styled(Dot)`
  animation-delay: 0.1s;
`;

const Dot2 = styled(Dot)`
  animation-delay: 0.2s;
`;

const Dot3 = styled(Dot)`
  animation-delay: 0.3s;
`;

export { Loader };
