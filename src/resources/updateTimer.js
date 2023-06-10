/**
 *  Next.JS API for PUT request
 *
 * @param {*} data The data object containing the information on startTime, endTime, isActive boolean.
 *             The userID field is mandatory.
 */

async function updateTimer(data) {
  try {
    await fetch(`/api/prisma/timer`, {
      method: "PUT",
      headers: { "Contsent-Type": "application/json" },
      body: JSON.stringify({
        userID: data.id,
        startTime: data.startTime,
        endTime: data.endTime,
        totalTime: data.endTime - data.startTime,
        isActive: data.isActive,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

export default updateTimer;
