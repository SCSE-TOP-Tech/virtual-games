// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    bg: "src.png", 
    narration: [
      {
        name: "",
        text: ""
      },
      {
        name: "",
        text: ""
      },
      {
        name: "",
        text: ""
      }
    ],
    animations: {
      shake:{
        src: "src", 
        text: "..."
      }
    }
  })
}
