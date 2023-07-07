import { rooms } from "../../../../data/data.ts";

export default function handler(req, res) {
  const { name } = req.query;
  const selectedRoom = rooms.find((room) => {
    return room.id === name;
  });

  // Return JSON data if found
  if (typeof selectedRoom !== "undefined")
    return res.status(200).json(selectedRoom);

  res.status(404).json({ error: "Room Not found" });
}
