"use client";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import { Container, Box, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import CldImage from "../components/ImageComp";
import styles from "./components/styles.module.css";
import Map from "../Map";

export default function SeraphineRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("seraphine", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <div>
      {room && (
        <div>
          {/* bound to mobile view */}
          <Box w={["100%", "30em"]} h="100%" p={4}>
            {/* container for background image and items*/}
            {/* map and time components */}
            <Container display="flex" justifyContent="space-around">
              {/* placeholders for components  */}
              <Map />
              <Box color="red" fontWeight="bold" fontSize="2vh" p="10%">
                Time placeholder
              </Box>
            </Container>
            <Box display="flex" justifyContent="center" zIndex="0" width="100%">
              {/* background image */}
              <CldImage item={room.background} />
              {/* items container */}
              <Box position="absolute" zIndex="1">
                {/*all dimensions are calculated manually lol */}
                <CldImage
                  item={room.dummy_objects.teddybear}
                  className={styles.item}
                  alt="teddybear"
                  style={{
                    position: "relative",
                    top: "325px",
                    left: "40px",
                    width: "55px",
                  }}
                />

                {/*Jewelry box */}
                <CldImage
                  item={room.dummy_objects.jewelrybox}
                  className={styles.item}
                  alt="jewelry box"
                  style={{
                    position: "relative",
                    top: "255px",
                    right: "130px",

                    width: "80px",
                  }}
                />

                {/* Lipstick */}
                <CldImage
                  item={room.clues.lipstick}
                  className={styles.item}
                  alt="lipstick"
                  style={{
                    position: "relative",
                    top: "450px",
                    right: "120px",
                    width: "40px",
                    filter: "brightness(0.75)",
                  }}
                />

                {/* camera */}
                <CldImage
                  item={room.dummy_objects.camera}
                  className={styles.item}
                  alt="camera"
                  style={{
                    position: "relative",
                    left: "140px",
                    top: "215px",
                    width: "60px",
                  }}
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
