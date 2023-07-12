import prisma from "~/lib/prisma";

export default async function handle(req, res) {
  try {
    console.log("Successful API Call");
    const { roomName, userId } = req.body;

    const userItems = await prisma.userItem.findMany({
      where: {
        userID: userId,
        stateItem: {
          where: {
            roomName: roomName,
          },
        },
      },
      select: {
        itemName: true,
        collected: true,
      },
    });

    res.status(200).json(userItems);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
