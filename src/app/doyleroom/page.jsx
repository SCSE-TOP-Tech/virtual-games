"use client";

import Image from "next/image";
import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchData from "@/pages/fetchData/fetchData";

export default function DoyleRoom() {
  const [room, setRoom] = useState(false);

  // const apiData = fetchData(`/api/characters/${'doyle'}`) // To add dynamic 
  // const room = apiData.read();

  // Fetch API data
  async function loadRoomData(id, isCharacter) {
    if (!room) {

      const response = (isCharacter ? 
        await fetch(`/api/characters/${id}`) :  
        await fetch(`/api/rooms/${id}`) );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      response.json().then((data) => {
        setRoom(data.room);
      });
    }
  }

  // Initial Load
  useEffect(() => {
    loadRoomData("doyle", true);
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Box w={["100%", "30em"]} h="100%" p={4}>
        {/* background image */}
        {room && (
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
            <Image
              src={room.background}
              width={room.background.width}
              height={room.background.height}
              alt="background"
            />
            <Box position="absolute" zIndex="1">
              {/* album */}
              <Image
                src={room.clues.music_albums.src}
                height={room.clues.music_albums.height}
                width={room.clues.music_albums.width}
                className={styles.item}
                alt="album"
                style={{
                  position: "relative",
                  right: "70px",
                  top: "435px",
                  width: "45px",
                  margin: "0",
                }}
              />

              {/*luggage */}
              <Image
                src={room.dummy_objects.luggage.src}
                height={room.dummy_objects.luggage.height}
                width={room.dummy_objects.luggage.width}
                className={styles.item}
                alt={room.dummy_objects.luggage.name}
                style={{
                  position: "relative",
                  right: "120px",
                  top: "500px",
                  width: "70px",
                  filter: "brightness(0.60)",
                }}
              />

              {/* id card */}
              <Image
                src={room.clues.spaceID_card.src}
                height={room.dummy_objects.clothes.height}
                width={room.dummy_objects.clothes.width}
                alt={room.dummy_objects.clothes.name}
                className={styles.item}
                style={{
                  position: "relative",
                  right: "50px",
                  top: "450px",
                  width: "100px",
                }}
              />

              {/* scattered clothes */}
              <Image
                src={room.dummy_objects.clothes.src}
                height={room.dummy_objects.clothes.height}
                width={room.dummy_objects.clothes.width}
                alt={room.dummy_objects.clothes.name}
                className={styles.item}
                style={{
                  position: "relative",
                  left: "35px",
                  top: "175px",
                  width: "100px",
                  filter: "brightness(0.70)",
                }}
              />

              {/* bloodstained small towel  */}
              <Image
                src={room.clues.bloodstained_towel}
                height={room.clues.bloodstained_towel.height}
                width={room.clues.bloodstained_towel.width}
                alt={room.clues.bloodstained_towel.name}
                className={styles.item}
                style={{
                  position: "relative",
                  left: "150px",
                  top: "350px",
                  width: "80px",
                  filter: "brightness(0.5)",
                }}
              />
            </Box>
          </Box>
        )}
        <Box position="absolute" bottom="10%" mt="2%" w="28em" background="white">
          Text Component Here
        </Box>
      </Box>
    </Suspense>
  );
}
