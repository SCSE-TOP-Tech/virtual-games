import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    console.log("Successful PATCH to End Timer");
    const data: { userId: string; stateId: number } = await req.json();

    const timer = await prisma.timer.findFirst({
      where: {
        userId: data.userId,
        stateID: data.stateId,
      },
      select: {
        timerID: true,
      },
    });

    if (timer) {
      const endTimer = await prisma.timer.update({
        where: {
          timerID: timer.timerID,
        },
        data: {
          endTime: new Date(Date.now()),
        },
      });
      console.log(endTimer);
      console.log("Successfully end timer!");

      return NextResponse.json({ status: 200 });
    }

    return NextResponse.json({ status: 500 });
    // New User and Account
  } catch (error: any) {
    const error_response = {
      status: 404,
      message: error.message,
    };
    return NextResponse.json(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
