import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Successful POST to End Timer");
    const data: { userId: string; stateId: number } = await req.json();

    // New User and Account
    const endTimer = await prisma.timer.update({
      where: {
        userId: data.userId,
        stateID: data.stateId,
      },
      data: {
        endTime: new Date(Date.now()),
      },
    });
    console.log(endTimer);
    console.log("Successfully end timer!");

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
