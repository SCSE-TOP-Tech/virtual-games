import prisma from "../../../../../lib/prisma";

// POST /api/prisma/timer
// Required fields in body: userID, startTime, endTime, isActive
export default async function handle(req, res) {
  const { userId, startTime, endTime, isActive } = req.body;
  const result = await prisma.timer.create({
    data: {
      startTime: startTime,
      endTime: endTime,
      isActive: isActive,
      user: { connect: { userId: userId } },
    },
  });
  res.json(result);
}
