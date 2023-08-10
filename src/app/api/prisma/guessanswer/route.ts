import { prisma } from "~/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    console.log("Successful PATCH to update numAttempts");
    const { userId, complete } = await req.json();

    let guessData: any = null;
    
    if(complete){
      
      let { numAttempts }: any = await prisma.guess.findFirst({
        where: {
          userId: userId
        },
        select: {
          numAttempts: true
        }
      })
      

      guessData = await prisma.guess.update({
          where: {
              userId: userId
          },
          data: {
              numAttempts: numAttempts+1,
              score: 50-numAttempts,
              completed: true
          }
      })
    }
    else{
      guessData = await prisma.guess.update({
        where: {
            userId: userId
        },
        data: {
            numAttempts: {
                increment: 1,
            }
        }
      })
    }
    console.log(guessData.completed);
    console.log(guessData.score);
    console.log("Updated numAttempts");
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return  NextResponse.json({
      status: 500
    });
  }
}