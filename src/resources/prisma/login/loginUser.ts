/**
 * Next.JS POST API to Create User
 *
 * @param {*} userData User Object
 * @param {string} userData.name User Name
 * @param {string} userData.password User Password
 * @param {string} userData.email User Email
 */
import { Account } from "~/data/contracts/interfaces/account";
import { Response } from "~/data/contracts/interfaces/response";

async function loginUser(userData: Account) {
  try {
    const loginResponse = await fetch(`/api/login/user`, {
      method: "POST",
      body: JSON.stringify({
        name: userData.username,
        email: userData.email,
        password: userData.password,
      }),
    });
    const loginUser: Response = await loginResponse.json();
    if (loginUser.status !== 200) {
      return null;
    }
    return loginUser.body;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default loginUser;
