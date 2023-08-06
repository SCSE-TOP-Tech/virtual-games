import { prisma } from "~/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("Successful GET request for available items");
    const room_query = req.nextUrl.searchParams.get("room") ?? undefined;

    const roomItems = await prisma.stateItem.findMany({
      where: {
        roomName: room_query,
      },
      select: {
        itemName: true,
        stateID: true,
      },
    });

    console.log(roomItems);

    return NextResponse.json({ status: 200, body: roomItems });
  } catch (error: any) {
    const error_response = {
      status: 500,
      message: error.message,
    };
    return NextResponse.json(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
