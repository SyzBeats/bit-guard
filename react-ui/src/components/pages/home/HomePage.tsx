import { SectionControl } from './SectionControl';
import { HomepageStory } from './Story';
import CallToAction from './CallToAction';
import HeroLanding from './Hero';
import SignalBox from './signal/SignalBox';

import { SectionBackground, SectionBase } from '~/components/ui/styled/sections';
import { LayoutMain } from '~/components/layout/landing/layoutMain';
import { BaseContainer } from '~/components/ui/containers/BaseContainer';

const HomePage = () => {
	return (
		<LayoutMain>
			<HeroLanding />

			<SectionBase>
				<BaseContainer anker='how-it-works'>
					<SignalBox />
				</BaseContainer>
			</SectionBase>

			<SectionBackground>
				<BaseContainer>
					<HomepageStory />
				</BaseContainer>
			</SectionBackground>

			<SectionBase>
				<BaseContainer>
					<SectionControl />
				</BaseContainer>
			</SectionBase>

			<SectionBase>
				<BaseContainer>
					<CallToAction />
				</BaseContainer>
			</SectionBase>
		</LayoutMain>
	);
};

export { HomePage };
