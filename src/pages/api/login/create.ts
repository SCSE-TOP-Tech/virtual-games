import prisma from "~/lib/prisma";

export default async function handle(req, res) {
  try {
    console.log("Successful API Call to create!");
    const userData = req.body;

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
      },
    });
    console.log("Added User!");

    // Populating with userItems
    const stateItems = await prisma.stateItem.findMany();
    const newUserItems = stateItems.map((item) => {
      return {
        userID: newUser.userID,
        stateItemID: item.stateID,
        collected: false,
      };
    });

    const newUserItemsCreated = await prisma.userItem.createMany({
      data: newUserItems,
    });

    console.log("Added UserItems!");
    res.status(200).json(newUserItemsCreated);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
