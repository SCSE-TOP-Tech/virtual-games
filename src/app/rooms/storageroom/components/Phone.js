import { MdCall, MdCameraAlt, MdCropSquare } from 'react-icons/md'
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import PhotoApp from './PhotoApp';
import CallApp from './CallApp';
export default function Phone(props) {
    const [isPhoto, setPhoto] = useState(false)
    const [isCallLog, setCallLog] = useState(true)

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
            h={["95%", "24.5rem"]}
            w={["55%", "14rem"]}
            left='22.5%'
            top='2.5%'
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
                    h='16%' 
                    borderTop='1px solid white' 
                    bg='whitesmoke' 
                    m='0' 
                    p='1.4' 
                    position='absolute' 
                    bottom='0'
                >
                    <IconButton
                        aria-label='Call App'
                        fontSize='1rem'
                        icon={<MdCall />}
                        onClick={toggleCallLog}
                    />
                    <IconButton
                        aria-label='Close Phone'
                        fontSize='1rem'
                        icon={<MdCropSquare />}
                        onClick={props.handler}
                    />
                    <IconButton
                        aria-label='Photos App'
                        fontSize='1rem'
                        icon={<MdCameraAlt />}
                        onClick={togglePhoto}
                    />
                </Flex>
            </Box>
        </Box>
    )
}
