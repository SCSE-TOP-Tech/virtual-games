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
      console.log("Fetching current session...");
      const user = session?.user;
      const userEmail = user?.email ?? "";

      console.log(user);
      const account = await prisma.account.findUnique({
        where: {
          email: userEmail,
        },
        select: {
          user: true,
        },
      });

      if (account) {
        console.log("Fetched account!");
      }
      return NextResponse.json({
        authenticated: !!session,
        body: {
          account,
        },
      });
    }
  } catch (error) {
    return NextResponse.json({
      authenticated: false,
      body: "Error fetching user info!",
    });
  }
}
