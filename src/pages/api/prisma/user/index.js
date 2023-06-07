import prisma from "../../../../lib/prisma";

// POST /api/prisma/user
// Required fields in body: email, password, timers, guesses
// Optional fields in body: name, scores, hints
export default async function handle(req, res) {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  });
  res.json(result);
}
