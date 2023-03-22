// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Seraphine",
    background: "src.png",
    objects: {
      clues: {
        lipstick: {
          desc: 'Lipstick found next to the dead body',
          src: 'src.png'
        },
      },
      furnitures:{
        desk: 'src.png',
        bed: 'src.png',
        drawer: 'src.png',
        door: 'src.png', 
      }
    }
  })
}
