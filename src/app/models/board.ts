import { Image } from './image';

export interface Board {
    id: string;
    name: string;
    url: string;
    image: Map<string, Image>;
}
