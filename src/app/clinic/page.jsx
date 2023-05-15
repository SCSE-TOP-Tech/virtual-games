"use client";
import { Container, Box, Text, StylesProvider } from "@chakra-ui/react";

import Image from "next/image";
import styles from "./components/styles.module.css";

import background from "../../../public/Rooms/Clinic/clinic.png";
import { useEffect, useState } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import CldImage from "../components/CldImage";

export default function Clinic() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("clinic", false).then((data) => {
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
                <Text color="red" fontWeight="bold" fontSize="2vh">
                  Map placeholder
                </Text>
                <Text color="red" fontWeight="bold" fontSize="2vh">
                  Time placeholder
                </Text>
              </Container>
              <Image src={background} alt="background" />
              <Box position="absolute" zIndex="1">
                {/* doctor */}
                <CldImage
                  item={room.npc.doctor}
                  className={styles.item}
                  style={{
                    position: "relative",
                    right: "-80px",
                    top: "400px",
                    width: "200px",
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
