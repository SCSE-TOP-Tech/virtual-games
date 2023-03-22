// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Brand",
    background: "src.png",
    objects: {
      clues:{
        galaxy_phone: {
          desc: 'Brand Galaxy Phone', 
          time: '9:30pm',
          msg: 'Hey, I am feeling unwell but I can’t find you at your clinic. Where are you?',
          src:'src.png'
        }
      },
      furnitures: {
         pool_table: 'src.png',
         wardrobe: 'src.png',
         dressing_table: 'src.png',
         door: 'src.png',
         bed: 'src.png',
         trophy_rack: 'src.png',
         dressing_table: 'src.png',
      },
    }
  })
}
