"use client";

import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import { ItemImage, SizeFormatter } from "../components/ImageComp";
import Navbar from "../components/Navbar";
import Hint from "../components/Hint";

export default function DoyleRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("doyle", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    // To add loading page
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Navbar />

          <Box display="flex" justifyContent="center" width="100%">
            <ItemImage item={room.background} />
            <Box position="absolute" zIndex="1">
              {/* album */}
              <Hint>
                <ItemImage
                  item={room.clues.music_albums}
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
                />
              </Hint>

              {/*luggage */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.luggage}
                  className={styles.item}
                  width="4rem"
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
                />
              </Hint>

              {/* id card */}
              <Hint>
                <ItemImage
                  item={room.clues.spaceID_card}
                  className={styles.item}
                  width="5rem"
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
                />
              </Hint>

              {/* clothes */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.clothes}
                  className={styles.item}
                  width="6rem"
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
                />
              </Hint>

              {/* bloodstained small towel  */}
              <Hint>
                <ItemImage
                  item={room.clues.bloodstained_towel}
                  className={styles.item}
                  width="4rem"
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
