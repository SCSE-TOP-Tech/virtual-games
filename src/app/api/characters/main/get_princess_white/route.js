// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
      name: "Princess White", 
      image: "src.png",  
      actions: {
        walk: "src.svg",
        talk: "src.svg"
      }, 
      // speech: {
      //   murderscene:   
      //       ["...","..."],
      //   investigation: 
      //       ["...","..."]
      // } 
  })
}
