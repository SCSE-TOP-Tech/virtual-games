import prisma from "../../../../../lib/prisma";

// PUT /api/prisma/score
// Required fields in body: userId, timerScore, hintsScore, culpritScore, totalScore
export default async function handle(req, res) {
  const { userId, timerScore, hintScore, culpritScore } = req.body;
  const totalScore = timerScore + hintScore + culpritScore;

  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      scores: {
        update: {
          timerScore: timerScore,
          hintScore: hintScore,
          culpritScore: culpritScore,
          totalScore: totalScore,
        },
      },
    },
  });
  res.json(result);
}
