import { prisma } from "~/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

type User = {
  username: string;
  password: string;
};

export async function POST(req: NextRequest) {
  try {
    const user: User = await req.json();
    const currentAccount = await prisma.account.findFirst({
      where: {
        username: user.username,
      },
    });
    if (!currentAccount) {
      return NextResponse.json({ status: 404, body: "User does not exist" });
    }
    const isAuthenticated = await bcrypt
      .compare(user.password, currentAccount.password)
      .then((result: boolean) => result);
    if (isAuthenticated) {
      return NextResponse.json({
        status: 200,
        body: currentAccount,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return NextResponse.json({
        status: 401,
        body: "Invalid password!",
      });
    }
  } catch (error: any) {
    return NextResponse.json(JSON.stringify(error.message), {
      status: error.code || "404",
      headers: { "Content-Type": "application/json" },
    });
  }
}
