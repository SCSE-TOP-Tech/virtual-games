/**
 *  Next.JS API for POST request
 *
 * @param {*} data The data object containing the user's email and password.
 *             The email and password fields are mandatory.
 */

async function createUser(data) {
  try {
    await fetch(`/api/prisma/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        password: data.password,
        email: data.email,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default createUser;
