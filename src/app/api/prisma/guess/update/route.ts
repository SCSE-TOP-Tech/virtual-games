import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Successful POST to Update Guess");
    const data: { userId: string; score: number } = await req.json();

    // New User and Account
    const updateGuess = await prisma.guess.create({
      data: {
        user: {
          connect: {
            id: data.userId,
          },
        },
        userId: data.userId,
        score: data.score,
      },
    });
    console.log("Successfully updated guess!");

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
