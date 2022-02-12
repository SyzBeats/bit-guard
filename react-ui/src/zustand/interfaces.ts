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

interface CreateSecretFormState {
  selection: 'signal' | 'message';
  content: string;
  title: string;
  setSelection: (selection: 'signal' | 'message') => void;
  setContent: (content: string) => void;
  setTitle: (title: string) => void;
}
export { SignalState, AuthState, CreateSecretFormState };
