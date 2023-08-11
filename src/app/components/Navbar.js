import Time from './Time'
import Map from './Map'
import { Box } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <div>
            <Box
                display="flex"
                py="2%"
                justifyContent="space-between"
                alignItems='center'
                z-index={100}
            >
                <Map />
                <Time />
            </Box>
        </div>
    )
}
