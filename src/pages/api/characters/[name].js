import { characters } from "../../../../data/data.ts";

export default function handler(req, res) {
  const { name } = req.query;
  const user = characters.find((user) => {
    console.log(user);
    return user.id === name;
  });

  // Return JSON data if found
  if (typeof user !== "undefined") return res.status(200).json(user);

  res.status(404).json({ error: "User Not found" });
}
