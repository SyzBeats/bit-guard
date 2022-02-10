import create from 'zustand';
import { AuthState, SignalState } from './interfaces';

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
