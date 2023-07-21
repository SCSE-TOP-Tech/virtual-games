"use client";
import { Box, Input, Button, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import Correct from "./components/Correct.js";
import Incorrect from "./components/Incorrect.js";

export default function GuessingPage() {
    const [guess, setGuess] = useState([]);
    const [name, setName] = useState("");
    const [result ,showResult] = useState(false);
    const [isCorrect, setCorrectValue] = useState(false);
    const [numAttempt, setNumAttempt] = useState(0);

    const addInput = () => {
        if (name == "") return;
        setGuess([...guess, name]);
        setName("");
    }

    const addAttempt = () => {
        showResult(false);
        setGuess([]);
        setName("");
    }

    const submitGuess = () => {
        let foundCooper = false, foundPrincess = false;
        let score = 0;
        setNumAttempt(numAttempt+1);
        
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
            else {
                score -= 3;
            }
        }

        if (score == 20)
            setCorrectValue(true);

        if (score > 0)
            score = score * Math.pow(0.75, (numAttempt - 1));

        //upload score to BE
        console.log("Your score: " + score);

        showResult(true);
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative" bg='gray.300'>
            <Text>
                The heroes gathered in the Hallway as it is time to end this madness. 
                Will they unlock this puzzle? Or will the culprits get away? The whole interstellar is counting on you to decide.
            </Text>
            <Text> So who are the evil masterminds?</Text>
            <Text>Please enter one character at a time</Text>

            <Box>
                <Input placeholder='Input character name' size='md' onChange={handleChange} value={name} />
            </Box>

            <Button onClick={addInput}>Add character</Button>
            

            <Box>
                <Text>Your guess:</Text>
                <UnorderedList>
                    {guess.map((name) => <ListItem key={name}>{name}</ListItem>)}
                </UnorderedList>
            </Box>

            <Button onClick={submitGuess}>Submit answers</Button>
            <Box>{numAttempt}</Box>
            {result && 
                <Box w={["80%", "25em"]} h="60%" p={4} position="absolute" bg='green.300'
                top='20%' left='10%'>
                    {!isCorrect && <Incorrect handler={addAttempt}/>}
                    {isCorrect && <Correct />}
                </Box>}
        </Box>)
}