import { DragEvent, FC, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

import { UIContext } from '../../context/ui/UIContext';
import { Entry } from '../../interfaces';


interface Props {
    entry: Entry;
}

export const EntryCard:FC<Props>= ({ entry }) => {

    const { startDragging, endDragging } = useContext( UIContext );

    // Here I am identifying which entrance I am ding the drag
    const onDragStart = ( event: DragEvent ) => {
        event.dataTransfer.setData('text', entry._id );
        console.log(entry._id);

        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }


  return (
    <Card
        sx={{ marginBottom: 1, position: 'relative', zIndex: 999 }}
        // Eventos de drag
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
    
  )
};
