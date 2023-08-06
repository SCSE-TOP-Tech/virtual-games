/**
 * Next.JS GET API to Get Room Items
 *
 * @param roomName
 * @param userId
 */

interface CollectedItems {
  itemName: string;
  collected: boolean;
}

async function getCollectedItems(
  userId: string,
  roomName: string
): Promise<CollectedItems[] | null> {
  const collectedResponse = await fetch(
    `/api/prisma/items/collected?user=${userId}&room=${roomName}`
  );
  const collectedItems = await collectedResponse.json();

  return collectedItems.status == 200 ? collectedItems.body : null;
}
export default getCollectedItems;
