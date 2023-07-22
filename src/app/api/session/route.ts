import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "~/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({
      authenticated: false,
      body: "Error",
    });
  } else {
    try {
      const user = session?.user;
      const userEmail = user?.email ?? "";

      const account = await prisma.account.findUnique({
        where: {
          email: userEmail,
        },
        select: {
          id: true,
        },
      });

      const accountId = account?.id;
      const userInfo = await prisma.user.findFirst({
        where: {
          account: {
            id: accountId,
          },
        },
      });

      return NextResponse.json({
        authenticated: !!session,
        body: {
          userInfo,
        },
      });
    } catch (error) {
      return NextResponse.json({
        authenticated: !!session,
        body: "Error fetching user info!",
      });
    }
  }
}
