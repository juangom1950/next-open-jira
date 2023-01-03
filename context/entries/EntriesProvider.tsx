import { FC, useEffect, useReducer } from 'react';

import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

interface Props {
    children: React.ReactNode;
}


export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE );

    const addNewEntry = async( description: string ) => {

        // 2nd argument is the data that I want to send
        const { data } = await entriesApi.post<Entry>('/entries', { description });
        dispatch({ type: '[Entry] Add-Entry', payload: data });

    }

    const updateEntry = async( { _id, description, status }: Entry ) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status });
            dispatch({ type: '[Entry] Entry-Updated', payload: data });

        } catch (error) {
            console.log({ error });
        }
    }

    const refreshEntries = async() => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: '[Entry] Refresh-Data', payload: data });
    }

    useEffect(() => {
      refreshEntries();
    }, []);
    


    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};