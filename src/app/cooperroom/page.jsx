"use client";
import styles from "./components/styles.module.css";
import { Container, Box } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import { Container, Box } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import { ItemImage, SizeFormatter } from "../components/ImageComp";
import Map from "../Map";
import Hint from "../components/Hint";
export default function CooperPage() {
  const [room, setRoom] = useState(false);

  useEffect(() => {
    fetchRoom("cooper", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Container display="flex" justifyContent="space-around">
            <Map />
            <Box color="red" fontWeight="bold" fontSize="2vh">
              Time placeholder
            </Box>
          </Container>
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
              </Hint>

              {/* newspaper  */}
              <Hint>
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
              </Hint>

              {/* id  */}
              <Hint>
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
              </Hint>

              {/* coffeemachine  */}
              <Hint>
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
              </Hint>
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
      )}
    </Suspense>
  );
}
