import { shallow } from 'zustand/shallow';

import { useSignalState } from '../../store/store';

const SignalCount = () => {
  const signalState = useSignalState((state) => ({ signals: state.signals }), shallow);
  return <>{signalState.signals?.length}</>;
};

export { SignalCount };
