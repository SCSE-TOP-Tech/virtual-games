// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Cooper",
    background: "src.png",
    objects: {
      clues: {
        spaceID_card: {
          desc: 'Home Station: Earth',
          src: 'src.png'
        }
      },
      furnitures:{
        door: 'src.png',
        coffee_table: 'src.png',
        bed: 'src.png',
        piano: 'src.png',
        wardrobe: 'src.png',

      },
      dummy_objects:{
        newspaper: 'src.png',
        coffee_machine: 'src.png',
        luggage: 'src.png'
      }
    }
  })
}
