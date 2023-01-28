interface SignalState {
  signals: any[];
  linkCopied: boolean;
  setLinkCopied: (linkCopied: boolean) => void;
  setSignals: (signals: any[]) => void;
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
  link: string;
  setSelection: (selection: 'signal' | 'message') => void;
  setContent: (content: string) => void;
  setTitle: (title: string) => void;
  setLink: (link: string) => void;
}

export type { SignalState, AuthState, CreateSecretFormState };
