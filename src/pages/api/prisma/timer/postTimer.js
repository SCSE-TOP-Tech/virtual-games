import prisma from '../../../../../lib/prisma'

// POST /api/prisma/postTimer
// Required fields in body: userID, startTime, endTime, isActive
export default async function handle(req, res) {
  const { startTime, endTime, isActive, userId } = req.body
  const result = await prisma.timer.create({
    data: {
      startTime: startTime,
      endTime: endTime,
      isActive: isActive,
      user: { connect: { userId: userId } },
    },
  })
  res.json(result)
}
