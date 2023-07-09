/**
 *  Next.JS POST API for Updating Score
 *
 * @param {*} scoreData Score Object
 * @param {string} scoreData.id User ID
 * @param {int} scoreData.timer Time Score
 * @param {int} scoreData.hints Hints Score
 * @param {int} scoreData.culprit Culprit Score
 * @param {int} scoreData.total Total Score
 */

async function updateScore(scoreData) {
  try {
    await fetch(`/api/prisma/score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: scoreData.id,
        timerScore: scoreData.timer,
        hintScore: scoreData.hints,
        culpritScore: scoreData.culprit,
        totalScore: scoreData.totalScore,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default updateScore;
