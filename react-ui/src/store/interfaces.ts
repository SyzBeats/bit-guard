type SignalMimeType = 'text' | 'image' | 'video' | 'audio' | 'file';

export interface Signal {
	id: string;
	title: string;
	message: string;
	createdAt: string;
}

interface SignalState {
	signals: Signal[];
	linkCopied: boolean;
	setLinkCopied: (linkCopied: boolean) => void;
	setSignals: (signals: Signal[]) => void;
	addSignal: (signal: Signal) => void;
	removeSignal: (signal: string) => void;
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
