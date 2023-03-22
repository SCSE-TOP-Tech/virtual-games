// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Knight",
    background: "src.png",
    objects: {
      clues: {
        lipstick: {
          desc: 'Lipstick found next to the dead body',
          src: 'src.png'
        },
        space_note: {
          desc: 'Princess White owes $1,000,000',
          src: 'src.png'
        },
        guest_book: {
          desc: 'Guest signed in as "Sibling"',
          src: 'src.png'
        },
        photo_albums: {
          desc: 'Photo albums of each hero (except Seraphine)',
          src: 'src.png'
        },
        broken_watch: {
          desc: 'Shows 25th Jan (1 day before d-day)',
          src: 'src.png'
        },
        space_guns: {
          desc: 'Space Guns tagged to each hero (except Seraphine)',
          src: 'src.png'
        },
        dead_knight_shirt: {
          desc: 'Contains female nail polish',
          src: 'src.png'
        },
        dead_knight: {
          desc: 'Blood on the floor writing “CW”',
          src: 'src.png'
        }
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
