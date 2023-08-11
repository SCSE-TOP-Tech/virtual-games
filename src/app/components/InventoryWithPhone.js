import { Flex, Center, Text } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "./ImageComp";
import Hint from './Hint'

export default function InventoryWithPhone({ items, room, styles, togglePhone, ...rest }) {
    return (<>

        <Text
            fontSize={SizeFormatter(
                "1rem", //iphone se
                "1rem", //iphone xr
                "1rem", //iphone 12pro
                "1rem", //pixel 5
                "1rem", //samsung galaxy s8+
                "1rem", //samsung galaxy s20 ultra
                "1.5rem", //ipad air
                "1.5rem" //ipad mini
            )}
            fontFamily="monospace"
            py="1%"
            fontWeight={700}
            bgColor="white"
            textAlign="center"
        >
            Your inventory:
        </Text>
        <Flex flexWrap="wrap" bgColor="gray.400">
            {items.map((item, index) => {
                let itemInfo = null;
                let i = item.itemName;
                if(room.dummy_objects[i] !== undefined)
                    itemInfo = room.dummy_objects[i];
                else if(room.clues[i] !== undefined)
                    itemInfo = room.clues[i];
                else
                    itemInfo = room.npc[i];

                if(i !== "galaxy_phone" && i !== "doctorphone"){
                    return (
                    <Center key={index} m="1%" p="1%" border="solid" borderWidth="1px" borderRadius="5%">
                        <Hint>
                            <ItemImage
                                item={itemInfo}
                                //chakra props
                                className={styles.item}
                                width={SizeFormatter(
                                    "2rem", //iphone se
                                    "2.5rem", //iphone xr
                                    "3rem", //iphone 12pro
                                    "3rem", //pixel 5
                                    "5rem", //samsung galaxy s8+
                                    "5rem", //samsung galaxy s20 ultra
                                    "5rem", //ipad air
                                    "5rem" //ipad mini
                                )}
                            />
                        </Hint>
                    </Center>
                    )
                }
                return (
                    <Center key={index} m="1%" p="1%" border="solid" borderWidth="1px" borderRadius="5%">
                        <ItemImage
                            item={itemInfo}
                            onClick={togglePhone}
                            className={styles.item}
                            width={SizeFormatter(
                                "2rem", //iphone se
                                "2.5rem", //iphone xr
                                "3rem", //iphone 12pro
                                "3rem", //pixel 5
                                "5rem", //samsung galaxy s8+
                                "5rem", //samsung galaxy s20 ultra
                                "5rem", //ipad air
                                "5rem" //ipad mini
                            )}
                        />
                    </Center>
                )
            }
            )}
        </Flex>
    </>
    )
}