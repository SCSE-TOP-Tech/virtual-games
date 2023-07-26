/**
 * Next.JS GET API to Get Room Items
 *
 * @param roomName
 * @param userId
 */
import { Response } from "~/data/contracts/interfaces/response";

async function getCollectedItems(userId: string, roomName: string) {
  try {
    const collectedResponse = await fetch(
      `/api/prisma/items/collected?user=${userId}&room=${roomName}`
    );
    const collectedItems: Response = await collectedResponse.json();

    return collectedResponse.status != 200 ? collectedItems.body : null;
  } catch (error) {
    console.error(error);
  }
}
export default getCollectedItems;
