/**
 * Next.JS GET API to Get Room Items
 *
 * @param roomName
 */

async function getAvailableItems(roomName: string) {
  try {
    return await fetch(`/api/prisma/rooms/availableitems`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomName: roomName,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default getAvailableItems;
