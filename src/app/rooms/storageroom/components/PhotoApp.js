import { Box, Container, Flex } from "@chakra-ui/react";
import { MdCollections } from "react-icons/md";

export default function PhotoApp() {
    return (
        <Box w='100%' h='100%'>
            <Flex h='12%' bg='whitesmoke' p='1rem' alignItems='center'>
                <MdCollections fontSize='2rem' /> 
                <Container paddingLeft='1rem' fontWeight='1.4rem'>Photos</Container>
            </Flex>

            <img 
                src="/Rooms/Storage/selfie.png" 
                alt='selfie' 
                width='90%'
                style = {{position:'relative', top:'2%', left:'5%'}}
            />
        </Box>
    )
}