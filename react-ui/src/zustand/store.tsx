import create from 'zustand';
import { AuthState, SignalState } from './interfaces';

const useSignalState = create<SignalState>((set) => ({
  signals: [
    {
      id: '1',
      title: 'Signal 1',
      createdAt: '2020-01-01',
    },
    {
      id: '2',
      title: 'Signal 2',
      createdAt: '2020-01-01',
    },
  ],
  addSignal: (signal) => set((state) => ({ ...state, signals: [...state.signals, signal] })),
  removeSignal: (signal) => set((state) => ({ ...state, signals: state.signals.filter((s) => s.id !== signal.id) })),
}));

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: () => set((state) => ({ ...state, isLoggedIn: true })),
  logout: () => set((state) => ({ ...state, isLoggedIn: false })),
}));

export { useSignalState, useAuthStore };
