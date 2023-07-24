import { State } from "~/data/contracts";

interface User {
  id: number;
  name: string;
  state: State;
  stateID: number;
}

export type { User };
