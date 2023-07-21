import { prisma } from "~/lib/prisma";

export default async function handle(req, res) {
  try {
    console.log("Successful API Call");
    const data = req.body;

    const selectedUserItem = await prisma.userItem.findFirst({
      where: {
        userID: data.userID,
        stateItem: {
          itemName: data.itemName,
          roomName: data.roomName,
        },
      },
    });

    const updateUserItem = await prisma.userItem.updated({
      where: {
        userItemID: selectedUserItem.userItemID,
      },
      data: {
        collected: true,
      },
    });

    console.log("Updated Collected Item!");

    res.status(200).json(updateUserItem);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error!" });
  }
}
