import styled from 'styled-components';


import NavigationButton from '../../ui/buttons/NavigationButton';
import Avatar from '../../ui/user/Avatar';
import UiNotification from './UiNotification';

import { Activity, Home, LockIcon, Sliders, LogOut } from '~/components/icons/Icons';

const Sidebar = () => {

	// Handlers
	const handleLogOut = () => {
		localStorage.removeItem('token');

		window.location.href = '/';
	};

	return (
		<Wrapper>
			<Avatar src='' alt='avatar' />
			<UpperSection>
				<NavigationButton>
					<Home />
				</NavigationButton>

				<NavigationButton>
					<Activity />
				</NavigationButton>

				<NavigationButton>
					<LockIcon />
				</NavigationButton>

				<NavigationButton>
					<Sliders />
				</NavigationButton>
			</UpperSection>

			<LowerSection>
				<NavigationButton action={handleLogOut}>
					<LogOut />
				</NavigationButton>

				<UiNotification />
			</LowerSection>
		</Wrapper>
	);
};


// --- styled components ---

const Wrapper = styled.header`
  padding: 2rem 0.25rem;
  height: 100vh;

  position: sticky;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.highlight_iceblue};
  box-shadow: 3px 0 9px #1115;

  font-weight: 300;
  font-size: 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const LowerSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export { Sidebar };
