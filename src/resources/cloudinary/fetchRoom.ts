import { characters, rooms } from "~/data/data";

export default async function fetchRoom(id: string, isCharacter: boolean) {
  console.log("Fetching room!");
  return isCharacter
    ? characters.find((character) => character.id === id)?.room
    : rooms.find((room) => room.room_id === id);
}
