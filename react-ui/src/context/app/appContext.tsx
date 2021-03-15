import { createContext } from 'react';
import type { AppState } from '../../typings/types-context';

const AppContext = createContext<Partial<AppState>>({});

export { AppContext };
