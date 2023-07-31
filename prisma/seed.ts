import { prisma } from "../lib/prisma";
import { states, rooms, characters } from "../data/data";
import { Character, Room } from "../data/contracts";
import { StateItem } from "../data/contracts/interfaces/stateitem";

async function main() {
  await prisma.state.createMany({
    data: states,
  });
  console.log("Added States data");

  let stateItems: StateItem[] = [];
  let counter = 0;

  function extractCharacterRoom(
    chars: Character[],
    stateItems: StateItem[],
    counter: number
  ): [StateItem[], number] {
    chars.forEach((char: Character) => {
      const room = char.room;
      for (const key in room) {
        if (key == "clues" || key == "dummy_objects") {
          const item = room[key];
          for (const objkey in room[key]) {
            stateItems.push({
              stateItemID: counter++,
              stateID: item[objkey].state,
              itemName: objkey,
              roomName: room["room_id"],
            });
          }
        }
      }
    });
    return [stateItems, counter];
  }
  const charItems = extractCharacterRoom(characters, stateItems, counter);
  stateItems = charItems[0];
  counter = charItems[1];

  function extractRoom(
    rooms: Room[],
    stateItems: StateItem[],
    counter: number
  ): [StateItem[], number] {
    rooms.forEach((room: Room) => {
      for (const key in room) {
        if (key == "clues" || key == "dummy_objects") {
          const item = room[key];
          for (const objkey in room[key]) {
            stateItems.push({
              stateItemID: counter++,
              stateID: item[objkey].state,
              itemName: objkey,
              roomName: room["room_id"],
            });
          }
        }
      }
    });
    return [stateItems, counter];
  }
  const roomItems = extractRoom(rooms, stateItems, counter);
  stateItems = roomItems[0];

  await prisma.stateItem.createMany({
    data: stateItems,
  });
  console.log("Added StateItem data");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
