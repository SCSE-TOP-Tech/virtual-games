/**
 * Next.JS PATCH API to Update Collected Room Items
 *
 * @param userID
 * @param itemName
 * @param roomName
 */
async function updateCollectedItems(
  userID: number,
  itemName: string,
  roomName: string
) {
  try {
    return await fetch(`/api/prisma/items/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomName: roomName,
        itemName: itemName,
        userID: userID,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default updateCollectedItems;
