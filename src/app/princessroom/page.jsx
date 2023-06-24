"use client";
import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import { useEffect, useState } from "react";
import { CldImage } from "../components/ImageComp";
import Map from "../Map";

export default function PrincessRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("princess_white", true).then((data) => {
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
              <CldImage item={room.background} />
              <Box position="absolute" zIndex="1">
                {/* safe */}
                <CldImage
                item={room.clues.safe}
                  className={styles.item}
                  style={{
                    position: "relative",
                    right: "116px",
                    top: "458px",
                    width: "180px",
                    margin: "0",
                  }}
                />

                {/* door */}
                <CldImage item={room.dummy_objects.door}
                  className={styles.item}
                  alt="door"
                  style={{
                    position: "relative",
                    right: "-253px",
                    top: "70px",
                    width: "60px",
                    margin: "0",
                  }}
                />

                {/* map */}
                <CldImage item={room.clues.map}
                  className={styles.item}
                  alt="map"
                  style={{
                    position: "relative",
                    right: "-230px",
                    top: "-97px",
                    width: "40px",
                    margin: "0",
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
