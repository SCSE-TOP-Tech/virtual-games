import { prisma } from "../lib/prisma";
import { states, rooms, characters } from "../data/data";
import { Character, Room } from "../data/contracts";
import { StateItem } from "../data/contracts/interfaces/stateitem";
import { UserItem } from "../data/contracts/interfaces/useritem";
import { hash } from "bcryptjs";

async function main() {
  const password = "";
  const username = "";
  const name = "";
  let passwordHash = "";
  
  await hash(password, 10, 
    async (err, hash) => {
      console.log("Hash:", hash);
      passwordHash = hash;
      await prisma.user.create({
        data: {
          name: name,
          stateID: 1
      }})
    }
  );
  console.log("Added User");

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
  
  const user: any = await prisma.user.findFirst({
    where: {
      name: name
    },
    select: {
      id: true
    }
  })
  console.log("User ID:", user.id);

  let userItems: UserItem[] = [];
  for(let i = 0; i < stateItems.length; i++){
    userItems.push({
      userId: user.id,
      stateItemID: i,
      collected: false
    })
  }
  await prisma.userItem.createMany({
    data: userItems,
  });
  console.log("Added UserItem data");

  await prisma.account.create({
    data: {
      userId: user.id,
      username: username,
      password: passwordHash
    }
  })
  console.log("Added Account data");

  await prisma.guess.create({
    data: {
      userId: user.id,
      completed: false,
    }
  })
  console.log("Added Guess data");
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
