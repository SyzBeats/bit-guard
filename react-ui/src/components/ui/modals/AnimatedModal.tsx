import { lazy } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { X } from 'react-feather';

// lazy import the public signal form

const PublicSignalForm = lazy(() => import('../forms/createPublicSignal'));

import styles from './Animatedmodal.module.scss';

interface ModalProps {
  isOpen: Boolean;
  type: 'text' | 'image' | 'pdf';
  close: Function;
}

const AnimatedModal = (props: ModalProps) => {
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

  const backdropClasses = [styles.backdrop];

  if (props.isOpen) {
    backdropClasses.push(styles.visible);
  } else {
    backdropClasses.push(styles.hidden);
  }

  let Content = () => {
    switch (props.type) {
      case 'text':
        return <PublicSignalForm />;
      case 'image':
        return <div>Image</div>;
      case 'pdf':
        return <div>PDF</div>;
      default:
        return <div>Text</div>;
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
            <Content />
          </div>
        </div>
      </animated.div>
      <animated.div style={backdropStyle} className={backdropClasses.join(' ')} />
    </>
  );
};

export { AnimatedModal };
