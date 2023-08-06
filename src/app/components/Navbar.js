import { useState } from 'react'
import Time from './Time'
import Map from './Map'
import { Box, Center, Text } from '@chakra-ui/react'
import Phone from "./Phone"
import { BsPhoneFill } from 'react-icons/bs'

export default function Navbar() {
    const [phoneIsVisible, setPhoneIsVisible] = useState(false)
    return (
        <div>
            {phoneIsVisible && <Phone handler={() => setPhoneIsVisible(false)} />}
            <Box
                display="flex"
                py="2%"
                justifyContent="space-between"
                alignItems='center'
                z-index={100}
            >
                <Map />
                <button>

                    <Center
                        flexDirection='column'
                        onClick={
                            () => setPhoneIsVisible(true)
                        }
                    >

                        <BsPhoneFill size={30} />
                        <Text fontSize='0.6rem'>
                            See Messages
                        </Text>
                    </Center>
                </button>

                <Time />
            </Box>
        </div>
    )
}
