import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "~/lib/prisma";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({
        authenticated: false,
        body: "Error",
      });
    } else {
      const user = session?.user;
      const userEmail = user?.email ?? "";

      const account = await prisma.account.findUnique({
        where: {
          email: userEmail,
        },
        select: {
          user: true,
        },
      });

      return NextResponse.json({
        authenticated: !!session,
        body: {
          account,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      authenticated: false,
      body: "Error fetching user info!",
    });
  }
}
