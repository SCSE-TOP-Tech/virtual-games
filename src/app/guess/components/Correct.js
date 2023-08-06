import { Box, Text, Flex, Button } from "@chakra-ui/react";

export default function Correct() {

    const finishGame = () => {
        //finish the game
        console.log('final state completed');
    }

    return (<Flex flexDirection='column' alignItems='center' mt='2rem'>
        <Text fontSize="2rem" fontWeight="bold">Congratulations!</Text>
        <Text fontSize="1rem" mb='0.8rem'>You manage to catch the culprits!</Text>
        <Button w='80%' onClick={finishGame}>Finish game</Button>
    </Flex>)
}