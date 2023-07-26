/**
 * Next.JS GET API to Get Room Items
 *
 * @param roomName
 */
import { Response } from "~/data/contracts/interfaces/response";

async function getAvailableItems(roomName: string) {
  const availResponse = await fetch(
    `/api/prisma/items/available?room=${roomName}`
  );
  const availItems: Response = await availResponse.json();

  return availItems.status != 200 ? availItems.body : null;
}
export default getAvailableItems;
