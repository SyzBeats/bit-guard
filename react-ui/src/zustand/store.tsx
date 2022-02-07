import create from 'zustand';

interface SignalState {
  signals: any[];
  addSignal: (signal: any) => void;
  removeSignal: (signal: any) => void;
}

const useSignalState = create<SignalState>((set) => ({
  signals: [],
  addSignal: (signal) => set((state) => ({ ...state, signals: [...state.signals, signal] })),
  removeSignal: (signal) => set((state) => ({ ...state, signals: state.signals.filter((s) => s !== signal) })),
}));

export { useSignalState };
