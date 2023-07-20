"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import Hint from "../../components/Hint";
import Navbar from "../../components/Navbar";

export default function RomilyRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("romily", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    // To add loading page
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
            <ItemImage item={room.background} zIndex="0" />

            {/* items */}
            <Box position="absolute" zIndex="1">
              {/* Basketball */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.basketball}
                  className={styles.item}
                  width="3rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "6rem", //iphone se
                    "7rem", //iphone xr
                    "6rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "7rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "18rem",
                    "20.5rem",
                    "19rem",
                    "19rem",
                    "17rem",
                    "20.5rem",
                    "24.5rem",
                    "24.5rem"
                  )}
                />
              </Hint>

              {/* Punching Bag */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.punchingbag}
                  className={styles.item}
                  width={SizeFormatter(
                    "6.5rem", //iphone se
                    "6.5rem", //iphone xr
                    "6.5rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6.5rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  filter="auto"
                  brightness="70%"
                  left={SizeFormatter(
                    "5rem", //iphone se
                    "6rem", //iphone xr
                    "5.5rem", //iphone 12pro
                    "5.5rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "6rem", //samsung galaxy s20 ultra
                    "6rem", //ipad air
                    "6rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "8rem", //iphone se
                    "10.5rem", //iphone xr
                    "9rem", //iphone 12pro
                    "9rem", //pixel 5
                    "7rem", //samsung galaxy s8+
                    "10rem", //samsung galaxy s20 ultra
                    "11rem", //ipad air
                    "11rem" //ipad mini
                  )}
                />
              </Hint>

              {/* Towel */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.towel}
                  className={styles.item}
                  width="4rem"
                  filter="auto"
                  brightness="80%"
                  left={SizeFormatter(
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
                    "6rem", //iphone se
                    "8rem", //iphone xr
                    "7rem", //iphone 12pro
                    "7rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "8rem", //samsung galaxy s20 ultra
                    "9rem" //ipad mini
                  )}
                />
              </Hint>

              {/* Clothes */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.clothes}
                  className={styles.item}
                  width="8rem"
                  filter="auto"
                  brightness="80%"
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
                  bottom={SizeFormatter(
                    "4rem", //iphone se
                    "2rem", //iphone xr
                    "3rem", //iphone 12pro
                    "3rem", //pixel 5
                    "4.5rem", //samsung galaxy s8+
                    "2rem", //samsung galaxy s20 ultra
                    "3rem", //ipad mini
                    "3rem"
                  )}
                />
              </Hint>

              {/* Dumbbell */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.dumbbell}
                  className={styles.item}
                  filter="auto"
                  brightness="70%"
                  width={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2rem", //iphone 12pro
                    "2rem", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "2rem", //samsung galaxy s20 ultra
                    "3rem", //ipad air
                    "3rem" //ipad mini
                  )}
                  right={SizeFormatter(
                    "6rem", //iphone se
                    "7rem", //iphone xr
                    "6.5rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "7rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "8.5rem", //iphone se
                    "7rem", //iphone xr
                    "8rem", //iphone 12pro
                    "8rem", //pixel 5
                    "9.5rem", //samsung galaxy s8+
                    "7.5rem", //samsung galaxy s20 ultra
                    "9.5rem", //ipad air
                    "9.5rem" //ipad mini
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
