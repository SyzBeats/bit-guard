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

export { SignalState, AuthState };
