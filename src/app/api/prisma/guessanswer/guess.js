import updateGuess from "@/resources/prisma/guess/updateGuess";

export default async function submitGuess(
  userId,
  guess,
  numAttempt,
  setNumAttempt,
  showResult,
  setCorrectValue,
  setPartial
) {
  let foundCooper = false,
    foundPrincess = false;
  let score = 0;

  if (guess.length === 0) return;

  for (let name of guess) {
    name = name.toLowerCase().trim();
    if (name === "cooper" && !foundCooper) {
      foundCooper = true;
      score += 10;
    } else if (
      (name === "princess" || name === "princess white") &&
      !foundPrincess
    ) {
      foundPrincess = true;
      score += 10;
    } else score -= 3;
  }

  if (score < 0) score = 0;

  if (score === 20) setCorrectValue(true);
  else if (score > 0) setPartial(true);

  score = score * Math.pow(0.9, numAttempt);

  //upload score to BE
  console.log("Your score: " + score);
  console.log("# attempts: " + (numAttempt + 1));

  const updatedGuess = await updateGuess(userId, score);
  if (updatedGuess !== 200) {
    console.log("Failed to update Guess in database.");
  }

  showResult(true);
  setNumAttempt(numAttempt + 1);
}
