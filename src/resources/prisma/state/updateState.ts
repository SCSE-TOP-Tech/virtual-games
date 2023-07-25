/**
 * Next.JS PATCH API to Update State
 *
 * @param userID
 */

import { Response } from "~/data/contracts/interfaces/response";

async function updateState(userId: string) {
  const updateResponse = await fetch(`/api/prisma/state/update/${userId}`, {
    method: "PATCH",
  });
  const userData: Response = await updateResponse.json();

  if (userData.status != 200) {
    return null;
  }
  return userData.body;
}
export default updateState;
