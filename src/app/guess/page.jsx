"use client";
import { Box, Input, Button, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Correct from "./components/Correct.js";
import Incorrect from "./components/Incorrect.js";
import submitGuess from "@/app/api/prisma/guessanswer/guess.js";

export default function GuessingPage() {
    const [guess, setGuess] = useState([]);
    const [name, setName] = useState("");
    const [result, showResult] = useState(false);

    const [isPartial, setPartial] = useState(false);
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

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <Box display='flex' justifyContent='center' w='100%' h={800} bg='gray.300'>
        <Box
            w={["100%", "30em"]}
            h="100%"
            p='1rem'
            position="relative"
        >
            <Box bg='gray.400' p='0.5rem' mt='1rem'>
                <Text fontSize="1rem" fontWeight="bold" mb='1rem'>
                    The heroes gathered in the Hallway as it is time to end this madness.
                    Will they unlock this puzzle? Or will the culprits get away? The whole interstellar is counting on you to figure out this puzzle.
                </Text>
            </Box>

            <Box bg='gray.400' p='0.5rem' mt='0.6rem'>
                <Text fontSize="1.2rem" fontWeight="bold" mb='0.2rem'>
                    So who are the evil masterminds?
                </Text>
                <Text mb='0.8rem' fontSize='0.9rem'>
                    Please enter one character at a time
                </Text>

                <Box display='flex' justifyContent='center'>
                    <Input
                        placeholder="Input character name"
                        size="md"
                        mb='1rem'
                        onChange={handleChange}
                        value={name}
                    />
                </Box>
                <Button mt={2} colorScheme="teal" onClick={addInput}>
                    Add character
                </Button>
            </Box>

            <Box bg='gray.400' p='0.5rem' mt='0.6rem'>
                <Box mt='1rem'>
                    <Text fontSize="1.2rem" fontWeight="bold" mb='0.2rem'>Your guess:</Text>
                    <UnorderedList>
                        {guess.map((name) => <ListItem key={name}>{name}</ListItem>)}
                    </UnorderedList>
                </Box>

                <Button mt={4} colorScheme="teal" onClick={() => submitGuess(guess, numAttempt, setNumAttempt, showResult, setCorrectValue, setPartial)}>
                    Submit answers
                </Button>
            </Box>
            {/* <Box>{numAttempt}</Box> */}

            {result && (
                <Box
                    w={["80%", "25em"]}
                    h="30%"
                    p={4}
                    position="absolute"
                    bg={isCorrect ? "green.300" : "red.300"}
                    top="30%"
                    left="10%"
                    borderRadius="md"
                >
                    {!isCorrect && <Incorrect handler={addAttempt} partial={isPartial} />}
                    {isCorrect && <Correct />}
                </Box>
            )}
        </Box>
        </Box>)
}