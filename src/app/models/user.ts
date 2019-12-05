import { Image } from './image';

export interface User {
    id: string;
    username: string;
    images: Map<string, Image>;
}

export interface UserData {
  data: User;
}
