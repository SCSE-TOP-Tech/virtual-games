import { prisma } from "~/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { use } from "ast-types";
import { mockSession } from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;

export async function GET(req: NextRequest) {
  try {
    console.log("Successful GET request for collected items");
    const user_query = req.nextUrl.searchParams.get("user") ?? null;
    const room_query = req.nextUrl.searchParams.get("room") ?? null;

    if (user_query && room_query) {
      const userItemsResponse = await prisma.userItem.findMany({
        where: {
          userId: user_query,
        },
        include: {
          stateItem: true,
        },
      });

      // userItemsResponse.map(async (item) => {
      //   const itemData = await item.stateItem();
      //   return {itemName: itemData.itemName, collected: itemData.
      // });
      // console.log(userItemsResponse);

      const itemsList = userItemsResponse.map((item) => {
        return {
          itemName: item.stateItem.itemName,
          collected: item.collected,
        };
      });

      return NextResponse.json({ status: 200, body: userItemsResponse });
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
