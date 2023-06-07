/**
 *  Next.JS API for POST request
 *
 * @param {*} data The data object containing the user's email and password.
 *             The email and password fields are mandatory.
 */

async function updateScore(data) {
  try {
    await fetch(`/api/prisma/score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: data.id,
        timerScore: data.timer,
        hintScore: data.hint,
        culpritScore: data.culpritScore,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default updateScore;
