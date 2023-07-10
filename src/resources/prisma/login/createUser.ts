/**
 * Next.JS POST API to Create User
 *
 * @param {*} userData User Object
 * @param {string} userData.name User Name
 * @param {string} userData.password User Password
 * @param {string} userData.email User Email
 */
import { Account } from "~/data/contracts/interfaces/account";

async function createUser(userData: Account) {
  try {
    await fetch(`/api/prisma/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userData.username,
        password: userData.password,
        email: userData.email,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default createUser;
