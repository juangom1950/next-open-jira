import { FC, useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}


export const EntryList:FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext( EntriesContext );
    const { isDragging, endDragging } = useContext( UIContext );

    // This is momoized because We want this to change only when then "entry" changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ]);

    // To find the event type just put event: number and then get the type from there
    const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }

    const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
        const id = event.dataTransfer.getData('text');
        
        // Because this could be undefine, here I am adding this ! sign, to tell Typescipt I know what I am doing and
        // this is always going to hava a value. It isn't going to be undefine
        const entry = entries.find( e => e._id === id )!;
        entry.status = status;
        updateEntry( entry );
        endDragging();
    }

      
    return (
        //   TODO: aquí haremos drop
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
            // This will change the background when it is graging
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px'  }}>
                {/* It is going to chage depending if we are doing a drag or not
                    transition is used for animation */}
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}> 
                    {
                        // We need to use key always when we use map
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }
                </List>

            </Paper>
        </div>
    )
};
