import prisma from "~/lib/prisma";
import { Prisma } from ".prisma/client";

export default async function handle(req, res) {
  try {
    console.log("Successful API Call");
    const data = req.body;

    const timer: Prisma.TimerCreateInput = {
      user: {
        connect: { userID: data.userId },
      },
      state: {
        connect: { stateID: data.stateId },
      },
      endTime: "null",
      timeTaken: 0.0,
    };

    // New User and Account
    const addTimer = await prisma.timer.create({
      timer,
    });
    console.log(addTimer);

    res.status(200).json(addTimer);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
