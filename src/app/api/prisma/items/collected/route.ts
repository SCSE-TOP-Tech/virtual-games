import { prisma } from "~/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("Successful GET request for collected items");
    const user_query = req.nextUrl.searchParams.get("user") ?? null;
    const room_query = req.nextUrl.searchParams.get("room") ?? null;

    if (user_query && room_query) {
      const userItemsResponse = await prisma.userItem.findMany({
        where: {
          AND: [
            {
              userId: user_query,
            },
            {
              stateItem: {
                roomName: room_query,
              },
            },
          ],
        },
        include: {
          stateItem: true,
        },
      });

      const itemsList = userItemsResponse.map((item) => {
        return {
          itemName: item.stateItem.itemName,
          collected: item.collected,
        };
      });

      console.log(itemsList);
      return NextResponse.json({ status: 200, body: itemsList });
    }
    return NextResponse.json({ status: 500, body: null });
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
