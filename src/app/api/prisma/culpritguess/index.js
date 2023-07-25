import { prisma } from "../../../../../lib/prisma";

// POST /api/prisma/culpritguess
// Required fields in body: userID, culprit, isCorrect
export default async function handle(req, res) {
  const { userId, culprit, isCorrect } = req.body;
  const result = await prisma.timer.create({
    data: {
      user: { connect: { userId: userId } },
      culpritName: culprit,
      isCorrect: isCorrect,
    },
  });
  res.json(result);
}
