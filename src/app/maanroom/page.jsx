"use client";
import styles from "./components/styles.module.css";
import Navbar from "../components/Navbar";
import { Container, Text, Box } from "@chakra-ui/react";
import { CldImage, ItemImage, SizeFormatter } from "../components/ImageComp";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import Hint from "../components/Hint";

export default function MaanRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("maan", true).then((data) => {
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
              {/* spacesword  */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.spacesword}
                  className={styles.item}
                  width="2.7rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "0rem", //iphone xr
                    "0rem", //iphone 12pro
                    "0em", //pixel 5
                    "0rem", //samsung galaxy s8+
                    "0rem", //samsung galaxy s20 ultra
                    "0em", //ipad air
                    "0rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11rem",
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
