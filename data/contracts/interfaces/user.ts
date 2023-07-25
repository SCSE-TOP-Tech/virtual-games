import { State } from "~/data/contracts";

interface User {
  id: number;
  name?: string;
  stateId: number;
}

export type { User };
