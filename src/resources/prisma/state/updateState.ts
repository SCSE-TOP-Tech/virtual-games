/**
 * Next.JS POST API to Create User
 *=
 * @param userID
 * @param stateID
 */

async function updateState(userID: number, stateID: number) {
  try {
    await fetch(`/api/prisma/state/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: userID,
      }),
    });
    console.log("State Updated!");

    // Need to DB migrate (added relationship between state & timer)
    await fetch("/api/prisma/timer/add", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userID,
        stateId: stateID,
      }),
    });
    console.log("New State Timer Added!");
  } catch (error) {
    console.error(error);
  }
}

export default updateState;
