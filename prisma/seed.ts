import { PrismaClient } from "@prisma/client";
import { states, rooms, characters } from "../data/data.js";

const prisma = new PrismaClient();
async function main() {
  await prisma.state.createMany({
    data: states,
  });
  console.log("Added States data");

  // function extractItems(object) {
  //   const items: { id: bigint; name: string }[] = [];
  //
  //   function extract(obj) {
  //     for (const key in obj) {
  //       if (Array.isArray(obj[key])) {
  //         obj[key].forEach((item) => extract(item));
  //       } else {
  //         items.push(obj[key]);
  //       }
  //     }
  //   }
  //
  //   extract(object);
  //   return items;
  // }
  //
  // console.log(extractItems(rooms));

  // await prisma.item.createMany({
  //   data: items,
  // });

  // console.log("Added Items data");

  // await prisma.stateItem.createMany({});
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
