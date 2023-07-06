import { Menu, MenuItem, MenuList, MenuButton, Button, Link, Text } from '@chakra-ui/react'
import { MdMap } from 'react-icons/md'

export default function Map() {
    const rooms = [
        { name: 'Clinic', href: '/clinic' },
        { name: "Control Room", href: '/controlroom' },
        { name: 'Hallway', href: '/hallway' },
        { name: "Kitchen", href: '/kitchen' },
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

    rooms.sort(
        (a, b) => a.name.localeCompare(b.name)
    )

    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<MdMap />} mx='2%' >
                <Text fontWeight={600} >
                    Map
                </Text>
            </MenuButton>
            <MenuList zIndex={100}>
                {rooms.map((location, index) => (
                    <MenuItem key={index} p='0.3rem' ml='1%' zIndex={100}>
                        <Link href={location.href}>
                            <Text fontWeight={500} fontSize='0.8rem'>
                                {location.name}
                            </Text>
                            <hr />
                        </Link>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

