import { prisma } from "../../../../../lib/prisma";

// POST /api/prisma/timer
// Required fields in body: userID, startTime, endTime, isActive
export default async function handle(req, res) {
  const { userId, startTime, endTime, isActive } = req.body;
  const totalTime = endTime - startTime;
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      timer: {
        updateMany: {
          data: {
            startTime: startTime,
            endTime: endTime,
            totalTime: totalTime,
            isActive: isActive,
          },
        },
      },
    },
  });
  res.json(result);
}
