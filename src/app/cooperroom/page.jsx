"use client";
import styles from "./components/styles.module.css";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { ItemImage, SizeFormatter } from "../components/ImageComp";
import Navbar from "../components/Navbar";
import Hint from "../components/Hint";
export default function CooperPage() {
  const [room, setRoom] = useState(false);
  const [inventory, setInventory] = useState(['coffee_machine'])

  useEffect(() => {
    fetchRoom("cooper", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" position="relative">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            {/* background image */}
            {/* can use ItemImage for background image as well  */}
            <ItemImage item={room.background} />

            {/* items */}
            <Box position="absolute" zIndex="1">
              {/* luggage  */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.luggage}
                  onClick={() => setInventory((prev) => [...prev, "luggage"])}
                  //chakra props
                  className={styles.item + " " + (inventory.includes("luggage") ? styles.fade : "") }
                  width="6.5rem"
                  right={SizeFormatter(
                    "1rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "1rem", //ipad air
                    "1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "16rem",
                    "17.5rem",
                    "16rem",
                    "16rem",
                    "15rem",
                    "17.5rem",
                    "21rem",
                    "21rem"
                  )}
                />
              </Hint>

              {/* newspaper  */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.newspaper}
                  onClick={() => setInventory((prev) => [...prev, "newspaper"])}
                  //chakra props
                  className={styles.item + " " + (inventory.includes("newspaper") ? styles.fade : "")}
                  width="3.5rem"
                  right={SizeFormatter(
                    "3rem", //iphone se
                    "3.5rem", //iphone xr
                    "3rem", //iphone 12pro
                    "3.5rem", //pixel 5
                    "3rem", //samsung galaxy s8+
                    "3.5rem", //samsung galaxy s20 ultra
                    "5rem", //ipad air
                    "5rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "3.5rem", //iphone se
                    "5rem", //iphone xr
                    "4rem", //iphone 12pro
                    "4.25rem", //pixel 5
                    "3rem", //samsung galaxy s8+
                    "5rem", //samsung galaxy s20 ultra
                    "7rem", //ipad air
                    "7rem" //ipad mini
                  )}
                />
              </Hint>

              {/* id  */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.spaceID_card}
                  onClick={() => setInventory((prev) => [...prev, "spaceID_card"])}
                  //chakra props
                  filter="auto"
                  brightness="75%"
                  className={styles.item + " " + (inventory.includes("spaceID_card") ? styles.fade : "") }
                  width="5.5rem"
                  right={SizeFormatter(
                    "4rem", //iphone se
                    "4rem", //iphone xr
                    "4rem", //iphone 12pro
                    "4rem", //pixel 5
                    "4rem", //samsung galaxy s8+
                    "4rem", //samsung galaxy s20 ultra
                    "4rem", //ipad air
                    "4rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12rem",
                    "13rem",
                    "13rem",
                    "13rem",
                    "11rem",
                    "13rem",
                    "18rem",
                    "18rem"
                  )}
                />
              </Hint>

              {/* coffeemachine  */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.coffee_machine}
                  onClick={() => setInventory((prev) => [...prev, "coffee_machine"])}
                  //chakra props
                  className={styles.item + " " + (inventory.includes("coffee_machine") ? styles.fade : "") }
                  width="3.5rem" //use SizeFormatter if item should be different for different devices
                  left={SizeFormatter(
                    "8.5rem", //iphone se
                    "9.5rem", //iphone xr
                    "9rem", //iphone 12pro
                    "9.25rem", //pixel 5
                    "8.5rem", //samsung galaxy s8+
                    "9.25rem", //samsung galaxy s20 ultra
                    "11rem", //ipad air
                    "11rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "2.5rem", //iphone se
                    "4rem", //iphone xr
                    "3.25rem", //iphone 12pro
                    "3rem", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "4rem", //samsung galaxy s20 ultra
                    "6.5rem", //ipad air
                    "6.5rem" //ipad mini
                  )}
                />
              </Hint>
            </Box>
          </Box>

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
            {inventory.map((item) =>

              <Center m="1%" p="1%" border="solid" borderWidth="1px" borderRadius="5%">
                <ItemImage
                  item={room.dummy_objects[item]}
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
              </Center>
            )}

          </Flex>

          {/* <Box
            position="absolute"
            bottom="10%"
            mt="2%"
            w="28em"
            background={"white"}
          >
            Text Component Here
          </Box> */}
        </Box>
      )}
    </Suspense>
  );
}
