import { lazy, Suspense } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { X } from 'react-feather';

const FormCreatePublicDocument = lazy(() => import('~/components/ui/forms/FormCreatePublicDocument'));
const FormCreatePublicImage = lazy(() => import('~/components/ui/forms/FormCreatePublicImage'));
const FormCreatePublicSignal = lazy(() => import('~/components/ui/forms/FormCreatePublicSignal'));

import styles from './PublicSecretModal.module.scss';

interface ModalProps {
	isOpen: Boolean;
	type: 'text' | 'image' | 'pdf';
	close: Function;
}

const PublicSecretModal = (props: ModalProps) => {
	// Hooks
	const [style] = useSpring(
		() => ({
			from: { opacity: 0, bottom: '-20%' },
			to: {
				opacity: props.isOpen ? 1 : 0,
				bottom: (props.isOpen ? 50 : -20) + '%',
			},
			config: {
				mass: 3,
				friction: 40,
			},
		}),
		[props.isOpen],
	);


	const [backdropStyle] = useSpring(
		() => ({
			from: { opacity: 0 },
			to: { opacity: props.isOpen ? 1 : 0 },
		}),
		[props.isOpen],
	);


	// Class definitions
	const backdropClasses = [styles.backdrop];

	if (props.isOpen) {
		backdropClasses.push(styles.visible);
	} else {
		backdropClasses.push(styles.hidden);
	}


	// Determine content
	const Content = () => {
		switch (props.type) {
			case 'text': {
				return <FormCreatePublicSignal />;
			}
			case 'image': {
				return <FormCreatePublicImage />;
			}
			case 'pdf': {
				return <FormCreatePublicDocument />;
			}
			default: {
				return <FormCreatePublicSignal />;
			}
		}
	};


	return (
		<>
			<animated.div style={{ ...style, zIndex: 100, position: 'absolute' }}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<span className={styles.icon}>
						  <X onClick={() => props.close()} />
						</span>
					</div>

					<div className={styles.modalBody}>
						<Suspense>
							<Content />
						</Suspense>
					</div>
				</div>
			</animated.div>
			<animated.div style={backdropStyle} className={backdropClasses.join(' ')} />
		</>
	);
};

export { PublicSecretModal };
