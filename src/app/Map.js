import { Box, Button, Collapse, Link, ListItem, List } from '@chakra-ui/react'
import { useState } from 'react'

export default function Map() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const rooms = [
        { name: 'Clinic', href: '/clinic' },
        { name: "Control Room", href: '/controlroom' },
        { name: 'Hallway', href: '/hallway' },
        { name: "Princess' Room", href: '/princessroom' },
        { name: "Dressing Room", href: '/dressingroom' },
        { name: "Captain's Room", href: '/captainroom' },
        { name: "Brand's Room", href: '/brandroom' },
        { name: "Carmen's Room", href: '/carmenroom' },
        { name: "Cooper's Room", href: '/cooperroom' },
        { name: "Doyle's Room", href: '/doyleroom' },
        { name: "Maan's Room", href: '/maanroom' },
        { name: "Romily's Room", href: '/romilyroom' },
        { name: "Seraphine's Room", href: '/seraphineroom' },
        { name: "Storage's Room", href: '/storageroom' }
    ]

    return (
        <Box bg='white' zIndex={100}>
            <Button
                onClick={handleToggle}
                bg='teal.400'
                w='10rem'
                h='5rem'
                borderRadius='0'
                _hover={{bg: 'teal.300'}}
            >
                Map
            </Button>
            <Collapse in={isOpen}>
                <List styleType='none' ml='0'>
                    {rooms.map((location, index) => (
                        <ListItem p={['0.5rem', '0.3rem']} key={index}>
                            <Link href={location.href}>{location.name}</Link>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </Box>
    )
}