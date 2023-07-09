import { PrismaClient } from "@prisma/client";
import { states, rooms, characters } from "../data/data";
import { Item, Character, Room } from "../data/contracts";
import { StateItem } from "../data/contracts/interfaces/stateitem";

const prisma = new PrismaClient();
async function main() {
  await prisma.state.createMany({
    data: states,
  });
  console.log("Added States data");
  let items: Item[] = [];
  let stateItems: StateItem[] = [];
  let counter = 0;

  function extractCharacterRoom(
    chars: Character[],
    items: Item[],
    stateItems: StateItem[],
    counter: number
  ): [Item[], StateItem[], number] {
    chars.forEach((char: Character) => {
      const room = char.room;
      for (const key in room) {
        if (key == "clues" || key == "dummy_objects") {
          const item = room[key];
          for (const objkey in room[key]) {
            items.push({
              itemID: counter,
              name: item[objkey].name,
              category: key,
            });
            stateItems.push({
              stateItemID: counter,
              itemID: counter++,
              stateID: item[objkey].state,
            });
          }
        }
      }
    });
    return [items, stateItems, counter];
  }
  const charItems = extractCharacterRoom(
    characters,
    items,
    stateItems,
    counter
  );
  items = charItems[0];
  stateItems = charItems[1];
  counter = charItems[2];

  function extractRoom(
    rooms: Room[],
    items: Item[],
    stateItems: StateItem[],
    counter: number
  ): [Item[], StateItem[], number] {
    rooms.forEach((room: Room) => {
      for (const key in room) {
        if (key == "clues" || key == "dummy_objects") {
          const item = room[key];
          for (const objkey in room[key]) {
            items.push({
              itemID: counter,
              name: item[objkey].name,
              category: key,
            });
            stateItems.push({
              stateItemID: counter,
              itemID: counter++,
              stateID: item[objkey].state,
            });
          }
        }
      }
    });
    return [items, stateItems, counter];
  }
  const roomItems = extractRoom(rooms, items, stateItems, counter);
  items = roomItems[0];
  stateItems = roomItems[1];

  await prisma.item.createMany({
    data: items,
  });
  console.log("Added Items data");

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
