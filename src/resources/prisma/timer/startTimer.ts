/**
 * Next.JS POST API to start Timer
 *
 * @param userID
 * @param stateID
 */

import { Response } from "~/data/contracts/interfaces/response";

async function startTimer(userId: string, stateId: number) {
  const timerResponse = await fetch("/api/prisma/timer/start", {
    method: "POST",
    body: JSON.stringify({ userId: userId, stateId: stateId }),
  });
  const timerData: Response = await timerResponse.json();
  return timerData.status;
}
export default startTimer;
