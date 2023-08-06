import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    console.log("Successful GET to Calculate Score");
    const userId: string = (await req.json()).userId;

    const timer = await prisma.timer.findMany({
      where: {
        userId: userId,
      },
      select: {
        startTime: true,
        endTime: true,
      },
    });

    const guess = await prisma.guess.findFirst({
      where: {
        userId: userId,
      },
      select: {
        score: true,
      },
    });

    const hintScore = await prisma.userItem.count({
      where: { collected: true },
    });

    const timerScore = timer.reduce(
      (score, time) =>
        (score += Math.round(
          time.endTime.getTime() - time.startTime.getTime()
        )),
      0
    );

    const guessScore = guess?.score ?? 0;
    const totalScore = guessScore + timerScore + hintScore;

    return NextResponse.json({ status: 200, body: totalScore });
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
