


export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
}

// We use to use types when we know that we aren't going to expand it
export type EntryStatus = 'pending' | 'in-progress' | 'finished';