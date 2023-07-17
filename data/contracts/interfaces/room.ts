import { Image } from "./image";

interface Room {
  id: string;
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
  npc: {
    [npcName: string]: Image;
  };
}

export type { Room };
