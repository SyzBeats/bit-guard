import React from 'react';
import { useSignalState } from '../../zustand/store';

const CreateSignal = () => {
  const addSignal = useSignalState((state) => state.addSignal);
  const signals = useSignalState((state) => state.signals);

  return (
    <div>
      {signals.map((signal, index) => (
        <div key={index}>{signal.name}</div>
      ))}

      <button onClick={() => addSignal({ name: 'test' })}>Add Signal</button>
    </div>
  );
};

export default CreateSignal;
