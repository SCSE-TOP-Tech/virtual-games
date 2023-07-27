import { Response } from "~/data/contracts/interfaces/response";

/**
 * Next.JS PATCH API to Update Collected Room Items
 *
 * @param userId
 * @param itemName
 * @param roomName
 */
async function updateCollectedItems(
  userId: string,
  itemName: string,
  roomName: string
) {
  try {
    const updateResponse = await fetch(`/api/prisma/items/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        itemName: itemName,
        roomName: roomName,
      }),
    });
    const updatedItems: Response = await updateResponse.json();

    return updatedItems.status === 200 ? updatedItems.body : null;
  } catch (error) {
    console.error(error);
  }
}

export default updateCollectedItems;
