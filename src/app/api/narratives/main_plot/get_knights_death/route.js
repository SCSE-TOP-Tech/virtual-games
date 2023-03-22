// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({

    scene_start: {
      time: "8:00p.m.",  
      context: {
        next_scene: "The 7 heroes headed over to the Knight’s room to find out more from the knight."
      },
      narration: [
        {
          name:"Brand",
          content:"There is 1 more person on this spaceship whom we have not interrogated, the Knight!"
        },
        {
          name:"Mann",
          content:"Yes, he is an important person in the spaceship as he holds the master key to Princess White’s room as well."
        },
      ],
      interactions: [{
        scream: {
          content: " ... ",
          src: "src"}
      }]
    }, 

    scene_knight_room: {
      time: "8:15p.m.",  
      context: {
        prompt: "Upon reaching the knight’s room, the heroes were shocked by the sight in front of them! Click on items in the room to collect hints.",
        hints_collected: "You have collected all the hints from the knight’s room.",
        end: 'The 4 heroes started looking up and down for the lost master key.'
      },
      narration: [
        {
          name:"Seraphine",
          content:"I looked everywhere, but I can't seem to find knight’s master key."
        },
        {
          name:"Mann",
          content:"I couldn’t find it too, where can it be?"
        },
        {
          name:"Cooper",
          content: "Let’s look for it around the spaceship."
        }
      ],
    },
    
    scene_carmen_room: {
      time: "9:00p.m.",  
      context: {
        prompt: "NA",
      },
      narration: [
        {
          name:"Seraphine",
          content:"We found the master key!"
        },
        {
          name:"Cooper",
          content:"Well, Carmen, this seems suspicious…."
        },
        {
          name:"Mann",
          content: "Hmm, whose hairpin is that?"
        }
      ],
    }
  })
}
