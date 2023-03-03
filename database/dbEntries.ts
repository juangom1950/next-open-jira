import { isValidObjectId } from 'mongoose';
import { Entry, IEntry } from '../models';
import { db } from './';

// We do this to avoid the error cause by the ObjectId that come from the database
export const getEntryById = async( id: string ): Promise<IEntry | null> => {

    if ( !isValidObjectId(id) ) return null;

    await db.connect();
    // .lean take away functions that are associated with the entry
    // I will just give us the minimum functions needed to work with it
    // We will not have funtions as populate, save etc
    const entry = await Entry.findById(id).lean();
    await db.disconnect();

    return JSON.parse( JSON.stringify(entry) );

}

