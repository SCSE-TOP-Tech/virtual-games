"use client";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { Box } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import styles from "./components/styles.module.css";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";

export default function SeraphineRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("seraphine", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            {/* background image */}
            <ItemImage item={room.background} />
            {/* items container */}
            <Box position="absolute" zIndex="1">
              {/* teddybear */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.teddybear}
                  className={styles.item}
                  width="3rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "-6.7rem", //iphone se
                    "-7.5rem", //iphone xr
                    "-7.5rem", //iphone 12pro
                    "-7.5rem", //pixel 5
                    "-7.2rem", //samsung galaxy s8+
                    "-7.9rem", //samsung galaxy s20 ultra
                    "-9.8rem", //ipad air
                    "-9.9rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "10.5rem",
                    "12.5rem",
                    "11.7rem",
                    "11.7rem",
                    "10.4rem",
                    "12.4rem",
                    "15rem",
                    "15.2rem"
                  )}
                />
              </Hint>

              {/* Jewelry box */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.jewelrybox}
                  className={styles.item}
                  width="4rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "6.4rem", //iphone se
                    "7.4rem", //iphone xr
                    "7.4rem", //iphone 12pro
                    "7.4rem", //pixel 5
                    "7.2rem", //samsung galaxy s8+
                    "7.5rem", //samsung galaxy s20 ultra
                    "9.3rem", //ipad air
                    "9.3rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "6.2rem",
                    "7.8rem",
                    "6.9rem",
                    "6.95rem",
                    "5.6rem",
                    "7.7rem",
                    "10.35rem",
                    "10.35rem"
                  )}
                />
              </Hint>

              {/* Lipstick */}
              <Hint>
                <ItemImage
                  item={room.clues.lipstick}
                  className={styles.item}
                  width="1.3rem"
                  filter="auto"
                  brightness="30%"
                  right={SizeFormatter(
                    "7.4rem", //iphone se
                    "7.4rem", //iphone xr
                    "7.4rem", //iphone 12pro
                    "7.3rem", //pixel 5
                    "7rem", //samsung galaxy s8+
                    "7.8rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12rem",
                    "14rem",
                    "12.9rem",
                    "13rem",
                    "11rem",
                    "14.5rem",
                    "19rem",
                    "19rem"
                  )}
                />
              </Hint>

              {/* camera */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.camera}
                  className={styles.item}
                  width="2rem"
                  filter="auto"
                  brightness="60%"
                  right={SizeFormatter(
                    "-2rem", //iphone se
                    "-2rem", //iphone xr
                    "-2rem", //iphone 12pro
                    "-2rem", //pixel 5
                    "-1.8rem", //samsung galaxy s8+
                    "-2rem", //samsung galaxy s20 ultra
                    "-2rem", //ipad air
                    "-2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "6rem",
                    "7.7rem",
                    "6.5rem",
                    "6.5rem",
                    "5.3rem",
                    "7.5rem",
                    "10.5rem",
                    "10.5rem"
                  )}
                />
              </Hint>
            </Box>
          </Box>
          <Box mt="2%" w="100%" background={"white"}>
            Text Component Here
          </Box>
        </Box>
      )}
    </Suspense>
  );
}
