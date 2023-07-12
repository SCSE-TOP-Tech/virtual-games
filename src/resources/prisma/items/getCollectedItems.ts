/**
 * Next.JS GET API to Get Room Items
 *
 * @param roomName
 * @param userId
 */

async function getCollectedItems(roomName: string, userId: number) {
  try {
    return await fetch(`/api/prisma/rooms/collecteditems`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomName: roomName,
        userId: userId,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default getCollectedItems;
