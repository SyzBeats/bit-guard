import React from 'react';
import shallow from 'zustand/shallow';
import { useSignalState } from '../../zustand/store';

const SignalCount = () => {
  const signalState = useSignalState((state) => ({ signals: state.signals }), shallow);
  return <>{signalState.signals?.length}</>;
};

export { SignalCount };
