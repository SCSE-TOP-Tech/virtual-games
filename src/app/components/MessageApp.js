import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { MdDoneAll, MdMessage } from "react-icons/md";

export default function MessageApp() {
    return (
        <Box w='100%' h='100%'>
            <Flex h='12%' bg='whitesmoke' p='1rem' alignItems='center'>
                <MdMessage fontSize='1.5rem' />
                <Container
                    paddingLeft='1rem'
                    fontWeight='1.4rem'
                    fontSize='1.2rem'
                >
                    Messages
                </Container>
            </Flex>

            <Box p='1rem'>
                <Container
                    paddingLeft='1rem'
                    fontWeight='1.4rem'
                    fontSize='0.8rem'
                    bg='green.300'
                    borderRadius='2%'
                >
                    Hey, I am feeling unwell but I can’t find you at your clinic. Where are you?
                </Container>
                <Flex justifyContent='flex-end'>
                    <MdDoneAll fontSize='0.8rem' />
                    <Text
                        marginLeft='0.1rem'
                        fontSize='0.6rem'
                    >
                        9.30 pm
                    </Text>
                </Flex>

                <Container
                    paddingLeft='1rem'
                    marginTop='0.5rem'
                    fontWeight='1.4rem'
                    fontSize='0.8rem'
                    bg='#FFFEFC'
                    borderRadius='2%'
                >
                    I will meet you at your room.
                </Container>
                <Flex>
                    <Text marginLeft='0.3rem' fontSize='0.6rem'>9.35 pm</Text>
                </Flex>
            </Box>
        </Box>
    )
}