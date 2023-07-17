import { Image } from "./image";

interface Character {
  id: string;
  name: string;
  image: string;
  actions: {
    [actionName: string]: {
      name: string;
      height: number;
      width: number;
      src: string;
    };
  };
  room: {
    room_id: string;
    name: string;
    background: {
      name: string;
      height: number;
      width: number;
      src: string;
    };
    clues: {
      [clueName: string]: Image;
    };
    dummy_objects: {
      [dummyName: string]: Image;
    };
  };
}

export type { Character };
