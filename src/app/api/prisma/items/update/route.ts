import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    console.log("Successful PATCH call to update collection");
    const data: { userId: string; itemName: string; roomName: string } =
      await req.json();

    const stateItem = await prisma.stateItem.findFirst({
      where: {
        itemName: data.itemName,
        roomName: data.roomName,
      },
    });

    if (stateItem) {
      console.log("Found State Item");
      const userItem = await prisma.userItem.findFirst({
        where: {
          AND: [
            {
              user: {
                id: data.userId,
              },
            },
            {
              stateItemID: stateItem.stateItemID,
            },
          ],
        },
      });

      if (userItem) {
        console.log("Found User Item");
        const selectedUserItem = await prisma.user.update({
          where: {
            id: data.userId,
          },
          data: {
            items: {
              update: {
                where: {
                  userItemID: userItem.userItemID,
                },
                data: {
                  collected: true,
                },
              },
            },
          },
          include: {
            items: true,
          },
        });
        console.log("Updated Collected Item!");
        return NextResponse.json({ status: 200, body: selectedUserItem });
      }
    }
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
