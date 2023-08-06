import { Flex, Text, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Submit(props) {
    const router = useRouter(); 
    return (
        <Box
            w={["70%", "20em"]}
            h="70%"
            position='absolute'
            p={4}
            bg="green.300"
            top="10%"
            left="15%"
            borderRadius="md"
            zIndex={3}
        >
            <Flex flexDirection='column' alignItems='center' mt='0.7rem' p='0.3rem'>
                <Text
                    fontSize="1.3rem"
                    fontWeight="bold"
                    textAlign='center'
                >
                    Ready to guess?
                </Text>
                <Text
                    fontSize="0.5rem"
                    mb='0.8rem'
                    textAlign='center'
                    fontWeight="medium"
                >
                    warning: You will not be able to go back once you start guessing
                </Text>
                <Button
                    w='60%'
                    mb='0.6rem'
                    fontSize="0.8rem"
                    onClick={props.clickHandler}
                >
                    Back
                </Button>
                <Button
                    w='60%'
                    fontSize="0.8rem"
                    onClick={async () => router.push("/guess")}
                >
                    Submit answers
                </Button>
            </Flex>
        </Box>
    )
}