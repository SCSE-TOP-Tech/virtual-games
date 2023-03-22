// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Doyle",
    background: "src.png",
    objects: {
      clues: {
        spaceID_card: {
          desc: 'Home Station: Andromeda',
          src: 'src.png'
        },
        music_albums: {
          desc: 'Albums of ',
          src: 'src.png'
        }
      },
      furnitures:{
        door: 'src.png',
        wardrobe: 'src.png',
        bed: 'src.png',
        table: 'src.png', 
      },
      dummy_objects:{
        rug: 'src.png',
        clothes: 'src.png',
        luggage: 'src.png'
      }
    }
  })
}
