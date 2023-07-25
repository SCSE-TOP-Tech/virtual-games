import { User } from "~/data/contracts/interfaces/user";

interface Timer {
  timerID: number;
  user: User;
  userID: number;
  startTime: string;
  endTime: string;
  timeTaken: number;
}

export type { Timer };
