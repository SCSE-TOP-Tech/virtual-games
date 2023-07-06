import { Box, Container, Flex } from "@chakra-ui/react";
import { MdKeyboardTab, MdSettingsPhone } from "react-icons/md";

export default function PhotoApp() {
    return (
        <Box w='100%' h='100%'>
            <Flex h='12%' bg='whitesmoke' p='1rem' alignItems='center'>
                <MdSettingsPhone fontSize='2rem' /> 
                <Container paddingLeft='1rem' fontWeight='1.4rem'>Call Log</Container>
            </Flex>

            <Flex p='1rem'>
                <MdKeyboardTab fontSize='1.6rem' color="green"/>
                <Container paddingLeft='1rem' fontWeight='1.4rem'>Today, 9.03 pm | Princess </Container>
                
            </Flex>
        </Box>
    )
}