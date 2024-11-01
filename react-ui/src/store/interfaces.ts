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

// TODO: move to a separate file for types
type SignalMimeType = 'text' | 'image' | 'video' | 'audio' | 'file';

interface CreateSecretFormState {
  selection: 'signal' | 'message';
  content: string;
  signalTitle: string;
  signalLink: string;
  type?: SignalMimeType;
  extension?: string;
  setSelection: (selection: 'signal' | 'message') => void;
  setContent: (content: string) => void;
  setTitle: (title: string) => void;
  setLink: (link: string) => void;
  setType: (type: SignalMimeType) => void;
  setExtension: (extension: string) => void;
  clear: () => void;
}

export type { SignalState, AuthState, CreateSecretFormState, SignalMimeType };
