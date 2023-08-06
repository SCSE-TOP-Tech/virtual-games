/**
 * Next.JS POST API to end Timer
 *
 * @param userID
 * @param stateID
 */

import { Response } from "~/data/contracts/interfaces/response";

async function endTimer(userId: string, stateId: number) {
  const timerResponse = await fetch("/api/prisma/timer/end", {
    method: "PATCH",
    body: JSON.stringify({ userId: userId, stateId: stateId }),
  });
  const timerData: Response = await timerResponse.json();
  return timerData.status;
}
export default endTimer;
