import prisma from '../../../../../lib/prisma'

// PUT /api/prisma/score/:id
export default async function handle(req, res) {
  const scoreId = req.query.id
  const { userId, timerScore, hintsScore, culpritScore, totalScore } = req.body;
  const score = await prisma.score.update({
    where: { scoreId: Number(scoreId) },
    data: { 
      timerScore: timerScore, 
      hintsScore: hintsScore, culpritScore,
      totalScore: totalScore,
      user: { connect: { userId: userId } },
    },
  })
  res.json(score)
}
