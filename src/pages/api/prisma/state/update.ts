import prisma from "~/lib/prisma";

export default async function handle(req, res) {
  try {
    console.log("Successful API Call");
    const userID = req.body.userId;

    // New User and Account
    const updateState = await prisma.user.update({
      where: {
        userID: userID,
      },
      data: {
        stateID: {
          increment: 1,
        },
      },
    });
    console.log(updateState);

    res.status(200).json(updateState);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
