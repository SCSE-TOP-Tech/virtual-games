/**
 * Next.JS POST API to update Guess Score
 *
 * @param userId
 * @param score
 */

async function updateGuess(userId: string, score: number) {
  const updateGuessResponse = await fetch(`/api/prisma/guess/update`, {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      score: score,
    }),
  });

  const updatedGuess = await updateGuessResponse.json();

  return updatedGuess.status;
}
export default updateGuess;
