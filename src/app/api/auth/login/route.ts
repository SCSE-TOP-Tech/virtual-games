import { prisma } from "~/lib/prisma";

export async function POST(request: Request) {
  try {
    console.log("Successful Login API Call!");
    const userData = await request.json();

    // Login account
    const currentAccount = await prisma.account.findFirst({
      where: {
        email: userData.email,
        password: userData.password,
      },
    });
    console.log(currentAccount);

    if (currentAccount == null) {
      console.log("Failed to login!");
      return new Response("Failed to login!", {
        status: 403,
      });
    } else {
      console.log("Successful login!");
      return new Response("Successful login!", {
        status: 200,
      });
    }
  } catch (e) {
    console.log(e);
    return new Response(e);
  }
}
