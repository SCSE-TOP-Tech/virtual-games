/**
 * Next.JS PATCH API to Update Transition
 *
 * @param userID
 */

import { Response } from "~/data/contracts/interfaces/response";
import fetchTransition from "@/resources/prisma/transitions/fetchTransition";

async function updateTransition(userId: string) {
  const updateResponse = await fetch(`/api/transitions/update`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
    }),
  });
  const transitionData = await updateResponse.json();

  if (transitionData.status != 200) {
    return null;
  }

  return await fetchTransition(transitionData.id);
}
export default updateTransition;
