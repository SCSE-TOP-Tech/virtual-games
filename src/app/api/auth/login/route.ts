import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Successful POST to Login");
    const userData: {
      name: string;
      email: string;
      password: string;
    } = await req.json();

    // Login account
    const currentAccount = await prisma.account.findFirst({
      where: {
        email: userData.email,
        password: userData.password,
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
