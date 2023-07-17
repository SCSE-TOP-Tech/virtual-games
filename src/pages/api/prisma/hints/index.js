import prisma from '../../../../../lib/prisma'

// PUT /api/prisma/hints/:id
export default async function handle(req, res) {
    const hintsId = req.query.id
    const hint = await prisma.hints.update({
        where: { id: Number(hintsId) },
        data: { hintsCollected: 1 },
    })
    res.json(hint)
}