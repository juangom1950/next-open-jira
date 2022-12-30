import { createContext } from 'react';

// It tells all the components how the context is going to look like
interface ContextProps {
    sidemenuOpen: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
}


export const UIContext = createContext({} as ContextProps );

