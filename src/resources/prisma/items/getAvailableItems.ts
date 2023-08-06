/**
 * Next.JS GET API to Get Room Items
 *
 * @param roomName
 */

interface AvailableItem {
  itemName: string;
  stateID: number;
}

async function getAvailableItems(
  roomName: string
): Promise<AvailableItem[] | null> {
  const availResponse = await fetch(
    `/api/prisma/items/available?room=${roomName}`
  );
  const availItems = await availResponse.json();

  return availItems.status == 200 ? availItems.body : null;
}
export default getAvailableItems;
