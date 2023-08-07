import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/lib/prisma";

// user id for manual testing
//"clkzn1klg0005uck94owj514c"
export async function POST(req: NextRequest) {
  const userId = await req.json();
  console.log(userId);
  const requiredID = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      transitionID: true,
      stateID: true,
    },
  });

  if (!requiredID) {
    return NextResponse.json({ status: 404, body: "User does not exist" });
  }
  return NextResponse.json({
    status: 200,
    body: requiredID,
    headers: { "Content-Type": "application/json" },
  });
}
