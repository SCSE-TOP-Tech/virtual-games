"use client";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CldImage from "../components/ImageComp";
import Map from "../Map";

export default function DoyleRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("dressing_room", false).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <div>
      {room && (
        <div>
          <Box w={["100%", "30em"]} h="100%" p={4}>
            {/* background image */}
            <Box
              display="flex"
              justifyContent="center"
              zIndex="0"
              h="90%"
              width="100%"
            >
              <Container
                position="absolute"
                display="flex"
                justifyContent="space-around"
                mt="1%"
              >
                {/* placeholders for components  */}
                <Map />
                <Text color="red" fontWeight="bold" fontSize="2vh">
                  Time placeholder
                </Text>
              </Container>
              <CldImage item={room.background}/>
              <Box position="absolute" zIndex="1">
                {/* lipstick*/}
                <CldImage item={room.clues.lipstick}
                  className={styles.item}
                  style={{
                    position: "relative",
                    right: "50px",
                    top: "365px",
                    width: "35px",
                    transform: "rotate(-60deg)",
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
