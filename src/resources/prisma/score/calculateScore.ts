/**
 * Next.JS GET API to Calculate Score
 *
 * @param userId
 */

export default async function calculateScore(userId: string) {
  const scoreResponse = await fetch(
    `/api/prisma/score/calculate?user=${userId}`
  );
  const userScore = await scoreResponse.json();

  return userScore.status == 200 ? userScore.body : null;
}
