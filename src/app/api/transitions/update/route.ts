import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";
import { mockSession } from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;

export async function PATCH(req: Request) {
  try {
    console.log("Successful PATCH to update transition");
    const userId: string = (await req.json()).userId;
    console.log(userId);
    const transitionID = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        transitionID: {
          increment: 1,
        },
      },
      select: {
        transitionID: true,
      },
    });

    console.log("Updated transition!");

    return NextResponse.json({ status: 200, id: transitionID.transitionID });
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
