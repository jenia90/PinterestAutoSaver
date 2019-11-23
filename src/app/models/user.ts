import { Image } from './image';

export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    bio: string;
    created_at: Date;
    counts: Map<string, number>;
    images: Map<string, Image>;

}
