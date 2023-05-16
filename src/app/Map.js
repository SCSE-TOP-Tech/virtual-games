import { Box, Link, Select, Stack } from '@chakra-ui/react'

export default function Map() {
    return (
        <Select placeholder='Map'>
            <option><Link href='/clinic'>Clinic</Link></option>
        </Select>
    )
    
}

        // <Box>
        //     <Link href='/clinic'>Clinic</Link>
        //     <Link href='/hallway'>Hallway</Link>
        //     <Link href='/princessroom'>Princess' Room</Link>
        //     <Link href='/dressingroom'>Dressing Room</Link>
        //     <Link href='/caprainroom'>Captain's Room</Link>
        //     <Link href='/brandroom'>Brand's Room</Link>
        //     <Link href='/carmenroom'>Carmen's Room</Link>
        //     <Link href='/cooperroom'>Cooper's Room</Link>
        //     <Link href='/doyleroom'>Doyle's Room</Link>
        //     <Link href='/maanroom'>Maan's Room</Link>
        //     <Link href='/romilyroom'>Romily's Room</Link>
        //     <Link href='/seraphineroom'>Seraphine's Room</Link>
        // </Box>