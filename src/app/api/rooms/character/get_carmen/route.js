// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Carmen",
    background: "src.png",
    objects: {
      clues: {
        master_key: {
          desc: 'Seems like the key to the Master Room',
          src: 'src.png'
        },
        invitation_letter: {
          desc: 'Sent from Planet Earth',
          src: 'src.png'
        },
        clothespin: {
          desc: 'Oddly familiar clothespin',
          src: 'src.png'
        },
      },
      furnitures:{
        dressing_table: 'src.png',
        rack: 'src.png',
        bed: 'src.png',
        desk: 'src.png'
      }
    }
  })
}
