import { State } from "~/data/contracts";

interface User {
  userID: number;
  name: string;
  state: State;
  stateID: number;
}

export type { User };
