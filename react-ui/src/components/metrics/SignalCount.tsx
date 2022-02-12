import React from 'react';
import shallow from 'zustand/shallow';
import { useSignalState } from '../../zustand/store';

const SignalCount = () => {
  const { signals } = useSignalState((state) => ({ signals: state.signals }), shallow);
  return <>{signals?.length}</>;
};

export { SignalCount };
