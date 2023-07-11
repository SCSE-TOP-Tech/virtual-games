import prisma from "../../../../lib/prisma";
import { Account } from "../../../../data/contracts/interfaces/account";

// POST /api/login
export default async function handle(req, res) {
  const data = req.body;
  try {
    // // New User and Account
    // const newUser = await prisma.user.create({
    //   data: {
    //     name: data.username,
    //     state: {
    //       connect: [{ stateID: 0 }],
    //     },
    //     account: {
    //       create: {
    //         email: data.email,
    //         password: data.password,
    //       },
    //     },
    //   },
    //   include: {
    //     account: true,
    //   },
    // });
    //

    // Populating with items
    const newUserItems = prisma.stateItem.findMany([]);
    newUserItems.then((data) => {
      console.log(data); // can retrieve list of items
    });

    res.status(201).json(1);
  } catch (e) {
    console.log(e);
    res.status(500).json({ e: "Failed to create user." });
  }
}
