"use client";

import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";

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
                    "4.5rem", //iphone se
                    "4.5rem", //iphone xr
                    "4.5rem", //iphone 12pro
                    "4.5rem", //pixel 5
                    "4.5rem", //samsung galaxy s8+
                    "4.5rem", //samsung galaxy s20 ultra
                    "6.5rem", //ipad air
                    "6.5rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12rem", //iphone se
                    "14rem", //iphone xr
                    "13rem", //iphone 12pro
                    "13rem", //pixel 5
                    "11.5rem", //samsung galaxy s8+
                    "13.5rem", //samsung galaxy s20 ultra
                    "16.5rem", //ipad air
                    "16.5rem" //ipad mini
                  )}
                />
              </Hint>

              {/*luggage */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.luggage}
                  className={styles.item}
                  width="4rem"
                  filter="auto"
                  brightness="70%"
                  right={SizeFormatter(
                    "6rem", //iphone se
                    "7rem", //iphone xr
                    "6rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "8rem", //ipad air
                    "8rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12.5rem", //iphone se
                    "14rem", //iphone xr
                    "12.5rem", //iphone 12pro
                    "12.5rem", //pixel 5
                    "11.5rem", //samsung galaxy s8+
                    "14rem", //samsung galaxy s20 ultra
                    "18rem", //ipad air
                    "18rem" //ipad mini
                  )}
                />
              </Hint>

              {/* id card */}
              <Hint>
                <ItemImage
                  item={room.clues.spaceID_card}
                  className={styles.item}
                  width="5rem"
                  left={SizeFormatter(
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
                    "11rem", //iphone se
                    "13.5rem", //iphone xr
                    "12rem", //iphone 12pro
                    "12rem", //pixel 5
                    "10rem", //samsung galaxy s8+
                    "13rem", //samsung galaxy s20 ultra
                    "17rem", //ipad air
                    "17rem" //ipad mini
                  )}
                />
              </Hint>

              {/* clothes */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.clothes}
                  className={styles.item}
                  width={SizeFormatter(
                    "4rem", //iphone se
                    "4rem", //iphone xr
                    "4rem", //iphone 12pro
                    "4rem", //pixel 5
                    "4rem", //samsung galaxy s8+
                    "4rem", //samsung galaxy s20 ultra
                    "5.5rem", //ipad air
                    "5.5rem" //ipad mini
                  )}
                  filter="auto"
                  brightness="80%"
                  left={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2rem", //iphone 12pro
                    "2rem", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "2rem", //samsung galaxy s20 ultra
                    "2rem", //ipad air
                    "2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "0", //iphone se
                    "1.5rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "0", //samsung galaxy s8+
                    "1.5rem", //samsung galaxy s20 ultra
                    "3.5rem", //ipad air
                    "3.5rem" //ipad mini
                  )}
                />
              </Hint>

              {/* bloodstained small towel  */}
              <Hint>
                <ItemImage
                  item={room.clues.bloodstained_towel}
                  className={styles.item}
                  width="2rem"
                  filter="auto"
                  brightness="75%"
                  left={SizeFormatter(
                    "9rem", //iphone se
                    "9rem", //iphone xr
                    "9rem", //iphone 12pro
                    "9rem", //pixel 5
                    "9rem", //samsung galaxy s8+
                    "9rem", //samsung galaxy s20 ultra
                    "11rem", //ipad air
                    "11rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "6rem", //iphone se
                    "8rem", //iphone xr
                    "7rem", //iphone 12pro
                    "7rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "8rem", //samsung galaxy s20 ultra
                    "11rem", //ipad air
                    "11rem" //ipad mini
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
            background={"white"}
          >
            Text Component Here
          </Box>
        </Box>
      )}
    </Suspense>
  );
}
