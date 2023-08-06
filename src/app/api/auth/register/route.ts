import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { Account } from "~/data/contracts/interfaces/account";
//to be deprecated
export async function POST(req: Request) {
  try {
    console.log("Successful API Call to register!");

    const { username, password }: Account = await req.json();
    const encryptedPassword = await hash(password, 12);

    // New User and Account
    const newUser = await prisma.user.create({
      data: {
        name: username,
        state: {
          connect: { stateID: 1 },
        },
        account: {
          create: {
            username: username,
            password: encryptedPassword,
          },
        },
      },
    });
    console.log("Added User!");

    // Populating with userItems
    const stateItems = await prisma.stateItem.findMany();
    const newUserItems = stateItems.map((item) => {
      return {
        userId: newUser.id,
        stateItemID: item.stateItemID,
        collected: false,
      };
    });

    await prisma.userItem.createMany({
      data: newUserItems,
    });

    console.log("Added UserItems!");
    console.log(newUser);
    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
