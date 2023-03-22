// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    scene_start: {
      time: "10:00p.m.",  
      context: {
        next_scene: ""
      },
      narration: [
        {
          name:"",
          content:""
        },
        {
          name:"",
          content:""
        }
      ]
    }
  })
}
