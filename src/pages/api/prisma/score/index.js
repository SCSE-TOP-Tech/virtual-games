import prisma from '../../../lib/prisma'

// POST /api/prisma/score
// Required fields in body: userId, timerScore, hintsScore, culpritScore, totalScore
export default async function handle(req, res) {
  const { userId, timerScore, hintsScore, culpritScore, totalScore } = req.body
  const result = await prisma.post.create({
    data: {
      timerScore: timerScore, 
      hintsScore: hintsScore, culpritScore,
      totalScore: totalScore,
      user: { connect: { userId: userId } },
    },
  })
  res.json(result)
}
