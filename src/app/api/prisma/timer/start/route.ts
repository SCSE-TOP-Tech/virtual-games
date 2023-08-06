import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Successful POST to Start Timer");
    const data: { userId: string; stateId: number } = await req.json();

    // New User and Account
    const addTimer = await prisma.timer.create({
      data: {
        user: {
          connect: { id: data.userId },
        },
        state: {
          connect: { stateID: data.stateId + 1 },
        },
        endTime: new Date(0),
        timeTaken: 0.0,
      },
    });
    console.log(addTimer);
    console.log("Successfully start timer!");

    return NextResponse.json({ status: 200 });
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
