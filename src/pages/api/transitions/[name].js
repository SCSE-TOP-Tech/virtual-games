import { transitions } from "../../../../data/data"

export default function handler(req, res) {
    const { name } = req.query
    const selectedTransition = transitions.find(transition => {
       return transition.id == name
    })

    // Return JSON data if found
    if(typeof selectedTransition !== 'undefined') return res.status(200).json(selectedTransition)

    res.status(404).json({ error: "Scene Not found"})
}