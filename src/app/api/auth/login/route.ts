import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

type User = {
  username: string;
  password: string;
};
export async function POST(req: Request) {
  try {
    const user: {
      username: string;
      password: string;
    } = await req.json();

    // Login account
    const currentAccount = await prisma.account.findFirst({
      where: {
        email: user.username, //to change to username when username attribute is added
        password: user.password,
      },
    });
    console.log(currentAccount);

    return NextResponse.json({ status: 200, body: currentAccount });
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
