import { Board } from './board';
import { Image } from './image';

export interface Pin {
    id: string;
    link: string;
    url: string;
    board: Board;
    created_at: Date;
    note: string;
    color: string;
    counts: Map<string, number>;
    media: Map<string, string>;
    attribution: Map<string, string>;
    image: Map<string, Image>;
    metadata: Map<string, object>;
}
