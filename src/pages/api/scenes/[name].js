import { scenes } from "../../../../data/data.js"

export default function handler(req, res) {
    const { name } = req.query
    const selectedScene = scenes.find(scene => {
       return scene.id == name
    })

    // Return JSON data if found
    if(typeof selectedScene !== 'undefined') return res.status(200).json(selectedScene)

    res.status(404).json({ error: "Scene Not found"})
}