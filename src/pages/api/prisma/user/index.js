import prisma from "../../../../../lib/prisma";

// POST /api/prisma/user
// Required fields in body: email, password, name, timers, guesses
// Optional fields in body: scores, hints
export default async function handle(req, res) {

  const result = await prisma.user.create({
    data: {
      ...req.body,
      scores: {
        create: {
          timerScore: 0,
          hintScore: 0,
          culpritScore: 0,
          totalScore: 0
        }
      }
    },
  });
  res.json(result);
}
