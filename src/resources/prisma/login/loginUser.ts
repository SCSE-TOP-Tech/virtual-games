/**
 * Next.JS POST API to Create User
 *
 * @param {*} userData User Object
 * @param {string} userData.name User Name
 * @param {string} userData.password User Password
 * @param {string} userData.email User Email
 */
import { Account } from "~/data/contracts/interfaces/account";

async function loginUser(userData: Account) {
  try {
    return await fetch(`/api/login/user`, {
      method: "POST",
      body: JSON.stringify({
        name: userData.username,
        password: userData.password,
      }),
    });
  } catch (error) {
    console.error(error);
    return error.name;
  }
}

export default loginUser;
