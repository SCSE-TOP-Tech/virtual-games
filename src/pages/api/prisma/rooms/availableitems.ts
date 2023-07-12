import prisma from "~/lib/prisma";

export default async function handle(req, res) {
  try {
    console.log("Successful API Call");
    const { roomName } = req.body;

    const availableItems = await prisma.stateItem.findMany({
      where: {
        roomName: roomName,
      },
      select: {
        itemName: true,
        stateID: true,
      },
    });

    res.status(200).json(availableItems);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
