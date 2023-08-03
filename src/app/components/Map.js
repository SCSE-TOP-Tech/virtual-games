import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { MdMap } from "react-icons/md";

export default function Map() {
  const rooms = [
    { name: "Clinic", href: "/rooms/clinic" },
    { name: "Control Room", href: "/rooms/controlroom" },
    { name: "Hallway", href: "/rooms/hallway" },
    { name: "Kitchen", href: "/rooms/kitchen" },
    { name: "Princess' Room", href: "/rooms/princessroom" },
    { name: "Dressing Room", href: "/rooms/dressingroom" },
    { name: "Captain's Room", href: "/rooms/captainroom" },
    { name: "Brand's Room", href: "/rooms/brandroom" },
    { name: "Carmen's Room", href: "/rooms/carmenroom" },
    { name: "Cooper's Room", href: "/rooms/cooperroom" },
    { name: "Doyle's Room", href: "/rooms/doyleroom" },
    { name: "Maan's Room", href: "/rooms/maanroom" },
    { name: "Romily's Room", href: "/rooms/romilyroom" },
    { name: "Seraphine's Room", href: "/rooms/seraphineroom" },
    { name: "Storage's Room", href: "/rooms/storageroom" },
  ];

  rooms.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdMap />} mx="2%">
        <Text fontWeight={600}>Map</Text>
      </MenuButton>
      <MenuList zIndex={100}>
        {rooms.map((location, index) => (
          <MenuItem key={index} p="0.3rem" ml="1%" zIndex={100}>
            <Link href={location.href}>
              <Text fontWeight={500} fontSize="0.8rem">
                {location.name}
              </Text>
              <hr />
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
