"use client";
import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { CldImage, ItemImage, SizeFormatter } from "../components/ImageComp";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from '@/resources/cloudinary/fetchRoom'
import Navbar from "../components/Navbar";
import Hint from "../components/Hint";
export default function Hallway() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("hallway", false).then((data) => {
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
            <ItemImage item={room.background} />
            <Box position="absolute" zIndex="1">
              {/* sibling-photo */}
              <Hint>
                <ItemImage
                  item={room.clues.portrait}
                  className={styles.item}
                  width="0.7rem"
                  filter="auto"
                  brightness="60%"
                  left={SizeFormatter(
                    "3.1rem", //iphone se
                    "3.4rem", //iphone xr
                    "3.2rem", //iphone 12pro
                    "3.2rem", //pixel 5
                    "2.93rem", //samsung galaxy s8+
                    "3.4rem", //samsung galaxy s20 ultra
                    "4.1rem", //ipad air
                    "4.1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11.5rem",
                    "12.8rem",
                    "12rem",
                    "12rem",
                    "10.9rem",
                    "12.8rem",
                    "15rem",
                    "15rem"
                  )}
                />
              </Hint>
            </Box>
          </Box>

          <Box mt="2%" w="100%" background="white">
            Text Component Here
          </Box>
        </Box>
      )}
    </Suspense>
  );
}
