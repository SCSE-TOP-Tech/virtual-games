import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log("Successful PATCH to Update State");
    const userId = params.id;

    // Update user's state
    const updateUserState = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        stateID: {
          increment: 1,
        },
      },
    });

    let json_response = {
      status: 200,
      data: {
        user: updateUserState,
      },
    };

    return NextResponse.json(json_response);
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
