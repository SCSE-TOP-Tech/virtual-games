import { MdCropSquare } from 'react-icons/md'
import { Box, Flex, IconButton } from "@chakra-ui/react";
import MessageApp from './MessageApp';

export default function Phone(props) {
    return (
        <Box
            position='absolute'
            h="95%"
            w={["55%", "14rem"]}
            left='22.5%'
            top='2.5%'
            border='0.5rem solid white'
            borderRadius='2%'
            zIndex={99}
            bg='gray.400'
        >
            <Box position='relative' w='100%' h='100%'>
                <MessageApp />
                <Flex 
                    justify='space-around' 
                    w='100%'
                    h='15%' 
                    borderTop='1px solid white' 
                    bg='whitesmoke' 
                    m='0' 
                    p='1' 
                    position='absolute' 
                    bottom='0'
                >
                    <IconButton
                        aria-label='Close Phone'
                        w='1rem'
                        icon={<MdCropSquare />}
                        onClick={props.handler}
                    />                 
                </Flex>
            </Box>
        </Box>
    )
}
