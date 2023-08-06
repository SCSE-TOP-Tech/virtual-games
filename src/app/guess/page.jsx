"use client";
import { Box, Input, Button, UnorderedList, Text } from "@chakra-ui/react";
import { useState } from "react";
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

  const userId = localStorage.getItem("user");

  const addInput = () => {
    if (name === "") return;
    setGuess([...guess, name]);
    setName("");
  };

  const addAttempt = () => {
    showResult(false);
    setGuess([]);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box display="flex" justifyContent="center" w="100%" h={800} bg="gray.800">
      <Box
        w={["100%", "30em"]}
        gap="2rem"
        h="100%"
        display="flex"
        flexDir="column"
        p="1rem"
        position="relative"
      >
        <Box bg="lightblue" p="0.5rem" mt="1rem" rounded="2xl">
          <Text
            fontSize="lg"
            textColor="gray.800"
            fontFamily="sans-serif"
            fontWeight="bold"
            m="1rem"
          >
            The heroes gathered in the Hallway as it is time to end this
            madness. Will they unlock this puzzle? Or will the culprits get
            away? The whole interstellar is counting on you to figure out this
            puzzle.
          </Text>
        </Box>

        <Box bg="lightblue" p="0.5rem" mt="0.6rem" rounded="2xl">
          <Text
            fontSize="lg"
            textColor="gray.800"
            fontFamily="sans-serif"
            fontWeight="bold"
            m="1rem"
          >
            So who are the evil masterminds?
          </Text>
          <Text
            m="1rem"
            fontSize="sm"
            fontFamily="sans-serif"
            fontWeight="semibold"
          >
            Please enter one character at a time
          </Text>

          <Box display="flex" justifyContent="center" rounded="2xl">
            <Input
              placeholder="Input character name"
              size="md"
              mb="1rem"
              mx="1rem"
              onChange={handleChange}
              value={name}
            />
          </Box>
          <Button mx="1rem" colorScheme="teal" onClick={addInput}>
            Add Character
          </Button>
        </Box>

        <Box bg="lightblue" p="0.5rem" mt="0.6rem" rounded="2xl">
          <Box m="1rem">
            <Text fontSize="1.2rem" fontWeight="bold" mb="0.2rem">
              Your guess:
            </Text>
            <UnorderedList>
              {guess.map((name, index) => (
                <Text
                  key={name + index}
                  fontSize="md"
                  fontFamily="sans-serif"
                  fontWeight="semibold"
                >
                  {index + 1}. {name}
                </Text>
              ))}
            </UnorderedList>
          </Box>

          <Button
            mx={4}
            colorScheme="teal"
            onClick={() =>
              submitGuess(
                userId,
                guess,
                numAttempt,
                setNumAttempt,
                showResult,
                setCorrectValue,
                setPartial
              )
            }
          >
            Submit answers
          </Button>
        </Box>

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
            {!isCorrect && (
              <Incorrect handler={addAttempt} partial={isPartial} />
            )}
            {isCorrect && <Correct />}
          </Box>
        )}
      </Box>
    </Box>
  );
}
