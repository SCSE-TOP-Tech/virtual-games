import { characters, rooms } from "~/data/data";

export default function fetchRoom(id, isCharacter) {
  return isCharacter
    ? characters.find((character) => character.id === id)?.room
    : rooms.find((room) => room.room_id === id);
}
