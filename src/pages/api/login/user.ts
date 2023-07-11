import prisma from "~/lib/prisma";

export default async function handle(req, res) {
  const userData = req.body;
  console.log("Successful API Call");

  // New User and Account
  const newUser = await prisma.user.create({
    data: {
      name: userData.name,
      state: {
        connect: { stateID: 1 },
      },
      Account: {
        create: {
          email: userData.email,
          password: userData.password,
        },
      },
      items: {
        createMany: {},
      },
    },
    include: {
      Account: true,
    },
  });
  console.log("Added User!");
  console.log(newUser.userID);

  // Populating with userItems
  const stateItems = await prisma.stateItem.findMany();
  const newUserItems = stateItems.map((item) => {
    return {
      userID: newUser.userID,
      stateItemID: item.stateID,
      collected: false,
    };
  });

  console.log(newUserItems);

  prisma.userItem.createMany({
    data: newUserItems,
  });

  // prisma.userItem.createMany({
  //   data: {
  //     user: {
  //       connect: { userID: newUser.userID },
  //     },
  //     userID: newUser.userID,
  //     stateItem: {
  //       connect: { stateItemID: item.stateItemID },
  //     },
  //     stateID: item.stateID,
  //     collected: false,
  //   },
  // });

  console.log("Added UserItems!");
}
