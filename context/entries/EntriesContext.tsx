import { createContext } from 'react';
import { Entry } from '../../interfaces';

// This is what the context expose to its childs
interface ContextProps {
    entries: Entry[];

    // Methods
    addNewEntry: (description: string) => void;
    updateEntry: (entry: Entry) => void;
}


export const EntriesContext = createContext({} as ContextProps );