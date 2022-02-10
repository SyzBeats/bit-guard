import React from 'react';
import { useSignalState } from '../../zustand/store';

const CreateSignal = () => {
  const addSignal = useSignalState((state) => state.addSignal);

  return (
    <div>
      <button onClick={() => addSignal({ id: `${Math.random()}`, title: 'Some signal', createdAt: Date.now() })}>Add Signal</button>
    </div>
  );
};

export default CreateSignal;
