export default async function submitGuess(userId, guess, showResult, setCorrectValue, setPartial) {
    try{
        if(!userId) return;

        let foundCooper = false, foundPrincess = false;
        let score = 0;

        if (guess.length > 0){
            for (let name of guess) {
                name = name.toLowerCase().trim();
                if (name == "cooper" && !foundCooper) {
                    foundCooper = true;
                    score += 10;
                }
                else if ((name == "princess" || name == "princess white") && !foundPrincess) {
                    foundPrincess = true;
                    score += 10;
                }
                else 
                    score -=3;
            }

            if (score < 0)
                score = 0;

            if (score == 20){
                await fetch(`/api/prisma/guessanswer`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        userId: userId,
                        complete: true
                    }),
                });
                setCorrectValue(true);
            }
            else if (score > 0){
                await fetch(`/api/prisma/guessanswer`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        userId: userId,
                        complete: false
                    }),
                });
                setPartial(true);
            }
        }

        showResult(true);
    } catch(error){
        console.log(error);
    }
}