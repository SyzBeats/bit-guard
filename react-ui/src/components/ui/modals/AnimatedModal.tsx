import { useSpring, animated } from '@react-spring/web';
import { X } from 'react-feather';

import styles from './Animatedmodal.module.scss';

interface ModalProps {
  isOpen: Boolean;
  close: Function;
}

const AnimatedModal = (props: ModalProps) => {
  const [style] = useSpring(
    () => ({
      from: { opacity: 0, bottom: '30%' },
      to: {
        opacity: props.isOpen ? 1 : 0,
        bottom: (props.isOpen ? 50 : 30) + '%',
      },
      config: {
        mass: 2,
        friction: 25,
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
            <h2>Some content here</h2>
          </div>
        </div>
      </animated.div>
      <animated.div style={backdropStyle} className={backdropClasses.join(' ')} />
    </>
  );
};

export { AnimatedModal };
