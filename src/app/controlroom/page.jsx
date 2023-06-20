"use client";
import styles from "./components/styles.module.css";
import { Container, Box } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import Map from "../Map";
import Image from "next/image";

export default function ControlRoom() {
  const [room, setRoom] = useState(false);

  useEffect(() => {
    fetchRoom("cooper", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
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
            {/* temporarily uses <img />  */}
            <Image src="rooms/Controlroom/background.png" alt="background" />

            {/* items */}
            <Box position="absolute" zIndex="1">
              {/* security computer (temp viewing) */}
              <Image
                src="rooms/Controlroom/security-computer.png"
                alt="security computer"
                style={{
                  position: "relative",
                  right: "-0.1rem",
                  top: "14.1rem",
                  width: "3.3rem",
                  margin: "0",
                }}
                className={styles.item}
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
      )}
    </Suspense>
  );
}
