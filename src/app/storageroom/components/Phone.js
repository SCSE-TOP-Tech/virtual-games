import { MdCall, MdCameraAlt } from 'react-icons/md'
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import PhotoApp from './PhotoApp';
import CallApp from './CallApp';

export default function Phone() {
    const [isPhoto, setPhoto] = useState(true)
    const [isCallLog, setCallLog] = useState(false)

    const togglePhoto = () => {
        if (!isPhoto) {
            setPhoto(true)
            setCallLog(false)
        }
    }

    const toggleCallLog = () => {
        if (!isCallLog) {
            setCallLog(true)
            setPhoto(false)
        }
    }

    return (
        <Box
            position='absolute'
            top='15%'
            h="70%"
            w={["71%", "20em"]}
            border='0.5rem solid white'
            borderRadius='2%'
            zIndex={99}
            bg='gray.400'

        >
            <Box position='relative' w='100%' h='100%'>
                {isPhoto && <PhotoApp />}
                {isCallLog && <CallApp />}

                <Flex 
                    justify='space-around' 
                    w='100%'
                    h='10%' 
                    borderTop='1px solid white' 
                    bg='whitesmoke' 
                    m='0' 
                    p='1' 
                    position='absolute' 
                    bottom='0'
                >
                    <IconButton
                        aria-label='Call App'
                        fontSize='20px'
                        icon={<MdCall />}
                        onClick={toggleCallLog}
                    />
                    <IconButton
                        aria-label='Photos App'
                        fontSize='20px'
                        icon={<MdCameraAlt />}
                        onClick={togglePhoto}
                    />
                </Flex>
            </Box>
        </Box>
    )
}
