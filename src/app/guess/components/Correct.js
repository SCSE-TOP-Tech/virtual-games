import { Text, Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Correct() {
    const router = useRouter();

    const finishGame = () => {
        //finish the game
        console.log('Game completed');
        localStorage.clear();
        router.push("/");
    }

    return (<Flex flexDirection='column' alignItems='center' mt='2rem'>
        <Text fontSize="2rem" fontWeight="bold">Congratulations!</Text>
        <Text fontSize="1rem" mb='0.8rem'>You manage to catch the culprits!</Text>
        <Button w='80%' onClick={finishGame}>Finish game</Button>
    </Flex>)
}