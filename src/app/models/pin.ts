import { Board } from './board';
import { Image } from './image';

export interface Pin {
    id: string;
    link: string;
    url: string;
    board: Board;
    note: string;
    color: string;
    image: Map<string, Image>;
}

export interface PinData {
  data: Pin[];
}
