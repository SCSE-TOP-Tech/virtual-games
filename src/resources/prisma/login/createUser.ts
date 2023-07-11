/**
 * Next.JS POST API to Create User
 *
 * @param {*} userData User Object
 * @param {string} userData.name User Name
 * @param {string} userData.password User Password
 * @param {string} userData.email User Email
 */
import { Context } from "~/jest/context";
import { Account } from "~/data/contracts/interfaces/account";
import { StateItem } from "~/data/contracts/interfaces/stateitem";

async function createUser(userData: Account, ctx: Context) {
  // New User and Account
  const newUser = await ctx.prisma.user.create({
    data: {
      name: userData.username,
      state: {
        connect: { stateID: 0 },
      },
      Account: {
        create: {
          email: userData.email,
          password: userData.password,
        },
      },
    },
    include: {
      Account: true,
    },
  });
  console.log("Added User!");

  // Populating with userItems
  const newUserItems = await ctx.prisma.stateItem.findMany();
  console.log(newUserItems);
  newUserItems.map((data: StateItem) => {
    ctx.prisma.userItem.create({
      data: {
        user: {
          connect: { userID: newUser.userID },
        },
        stateItem: {
          connect: { stateItemID: data.stateItemID },
        },
        collected: false,
      },
    });
  });

  console.log("Added UserItems!");
}

export default createUser;
