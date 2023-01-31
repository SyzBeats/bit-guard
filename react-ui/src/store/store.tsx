import create from 'zustand';
import { AuthState, CreateSecretFormState, SignalState } from './interfaces';

const useSignalState = create<SignalState>((set) => ({
  signals: [],
  linkCopied: false,
  setSignals: (signals) => set((state) => ({ ...state, signals })),
  setLinkCopied: (linkCopied) => set((state) => ({ ...state, linkCopied })),
  addSignal: (signal) => set((state) => ({ ...state, signals: [...state.signals, signal] })),
  removeSignal: (signal) => set((state) => ({ ...state, signals: state.signals.filter((s) => s.id !== signal) })),
}));

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: () => set((state) => ({ ...state, isLoggedIn: true })),
  logout: () => set((state) => ({ ...state, isLoggedIn: false })),
}));

const useCreateSecretFormState = create<CreateSecretFormState>((set) => ({
  selection: 'signal',
  content: '',
  title: '',
  link: '',
  type: 'text',
  extension: 'txt',
  setSelection: (selection) => set((state) => ({ ...state, selection })),
  setContent: (content) => set((state) => ({ ...state, content })),
  setTitle: (title) => set((state) => ({ ...state, title })),
  setLink: (link) => set((state) => ({ ...state, link })),
  setType: (type) => set((state) => ({ ...state, type })),
  setExtension: (extension) => set((state) => ({ ...state, extension })),
  clear: () => set((state) => ({ ...state, content: '', title: '', link: '' })),
}));

export { useSignalState, useAuthStore, useCreateSecretFormState };
