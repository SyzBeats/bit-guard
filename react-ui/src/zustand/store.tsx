import create from 'zustand';

interface SignalState {
  signals: any[];
  addSignal: (signal: any) => void;
  removeSignal: (signal: any) => void;
}

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useSignalState = create<SignalState>((set) => ({
  signals: [],
  addSignal: (signal) => set((state) => ({ ...state, signals: [...state.signals, signal] })),
  removeSignal: (signal) => set((state) => ({ ...state, signals: state.signals.filter((s) => s !== signal) })),
}));

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: () => set((state) => ({ ...state, isLoggedIn: true })),
  logout: () => set((state) => ({ ...state, isLoggedIn: false })),
}));

export { useSignalState, useAuthStore };
