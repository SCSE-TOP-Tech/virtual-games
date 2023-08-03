import { Box, Container, Flex } from "@chakra-ui/react";
import { MdKeyboardTab, MdSettingsPhone } from "react-icons/md";

export default function PhotoApp() {
    return (
        <Box w='100%' h='100%'>
            <Flex h='12%' bg='whitesmoke' p='1rem' alignItems='center'>
                <MdSettingsPhone fontSize='2rem' />
                <Container paddingLeft='1rem' fontWeight='1.4rem'>Call Log</Container>
            </Flex>

            <Flex p='0.7rem' justifyContent='space-evenly'>
                <MdKeyboardTab fontSize='1.2rem' color="green" />
                <Box>
                    <Container paddingLeft='0.5rem' fontWeight='1.4rem' fontSize='0.8rem' >Today, 9.03 pm</Container>
                    <Container paddingLeft='0.5rem' fontWeight='1.4rem' fontSize='0.8rem' color='navy'>Princess White</Container>
                </Box>
            </Flex>
        </Box>
    )
}