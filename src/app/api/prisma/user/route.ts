import { prisma } from "~/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    return await prisma.user.findFirst({
      where: {
        name: name,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}
