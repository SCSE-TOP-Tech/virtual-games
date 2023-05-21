"use client";
import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import { CldImage, ItemImage, SizeFormatter } from "../components/ImageComp";
import Map from "../Map";
export default function CooperPage() {
  const [room, setRoom] = useState(false);
  const a = SizeFormatter();
  const b = {
    iphone_se: "0",
    iphone_xr: "8rem",
    iphone_12pro: "0",
    pixel_5: "0",
    galaxy_s8plus: "0",
    galaxy_s20ultra: "0",
    ipad_air: "0",
    ipad_mini: "0",
  };
  //console.log(a.iphone_se === b.iphone_se);
  //console.log(isEqual(a, b));
  // Initial Load
  useEffect(() => {
    fetchRoom("cooper", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <div>
      {room && (
        <div>
          <Box w={["100%", "30em"]} h="100%" p={4}>
            {/* background ima`ge */}
            <Container display="flex" justifyContent="space-around">
              {/* placeholders for components  */}
              <Map />
              <Box color="red" fontWeight="bold" fontSize="2vh">
                Time placeholder
              </Box>
            </Container>
            <Box
              display="flex"
              justifyContent="center"
              position="relative"
              zIndex="0"
              width="100%"
            >
              <CldImage item={room.background} />
              <Box position="absolute" zIndex="1">
                {/* luggage  */}
                <ItemImage
                  item={room.dummy_objects.luggage}
                  onClick={console.log("test")}
                  //chakra props
                  className={styles.item}
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

                {/* newspaper  */}
                <ItemImage
                  item={room.dummy_objects.newspaper}
                  onClick={console.log("test")}
                  //chakra props
                  className={styles.item}
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

                {/* id  */}
                <ItemImage
                  item={room.dummy_objects.spaceID_card}
                  onClick={console.log("test")}
                  //chakra props
                  filter="auto"
                  brightness="75%"
                  className={styles.item}
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

                {/* coffeemachine  */}
                <ItemImage
                  item={room.dummy_objects.coffee_machine}
                  onClick={console.log("test")}
                  //chakra props
                  className={styles.item}
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
              </Box>
            </Box>
            <Box
              position="absolute"
              bottom="10%"
              mt="2%"
              w="28em"
              background="white"
            >
              Text Component Here
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}
