import { Image } from './image';

export interface Board {
    id: string;
    name: string;
    url: string;
    description: string;
    created_at: Date;
    counts: Map<string, number>;
    image: Map<string, Image>;
}
