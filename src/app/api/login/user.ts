import { prisma } from "~/lib/prisma";

export default async function handle(req, res) {
  try {
    console.log("Successful API Call to login!");
    const userData = req.body;

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
      res.status(500).json("Failed to login!");
    } else {
      console.log("Successful login!");
      res.status(200).json(currentAccount);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(null);
  }
}
