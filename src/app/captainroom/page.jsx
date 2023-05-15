"use client";
import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import CldImage from "../components/CldImage";

export default function CaptainRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("captain", false).then((data) => {
      setRoom(data);
    });
  }, []);
  return (
    <div>
      {room && (
        <div>
          {/* //bound to mobile vi */}
          <Box w={["100%", "30em"]} h="100%" p={4}>
            {/* container for background image and items*/}
            <Box
              display="flex"
              justifyContent="center"
              zIndex="0"
              h="90%"
              width="100%"
            >
              {/* map and time components */}
              <Container
                position="absolute"
                display="flex"
                justifyContent="space-around"
                mt="1%"
              >
                {/* placeholders for components  */}
                <Text color="white" fontWeight="bold" fontSize="2vh">
                  Map placeholder
                </Text>
                <Text color="white" fontWeight="bold" fontSize="2vh">
                  Time placeholder
                </Text>
              </Container>
              {/* background image */}
              <CldImage item={room.background}/>
              {/* items container */}
              <Box position="absolute" zIndex="1">
                {/*all dimensions are calculated manually lol */}
                <CldImage
                  item={room.clues.music_albums}
                  className={styles.item}
                  style={{
                    position: "relative",
                    top: "255px",
                    right: "130px",
                    width: "80px",
                  }}
                />

                {/*spaceguns*/}
                {/* <Image
              src={spaceguns}
              className={styles.item}
              alt='space gun'
              style={{
                position: 'relative',
                top: '255px',
                right: '130px',
                width: '80px',
              }}
            /> */}

                {/* Lipstick */}
                <CldImage
                  item={room.clues.lipstick}
                  className={styles.item}
                  style={{
                    position: "absolute",
                    top: "400px",
                    left: "-100px",
                    width: "40px",
                    transform: "rotate(-60deg)",
                  }}
                />

                {/* Guestbook */}
                <CldImage
                item={room.clues.guestbook}
                  className={styles.item}
                  style={{
                    position: "absolute",
                    top: "440px",
                    right: "1px",
                    left: "190px",
                    width: "70px",
                    transform: "rotate(10deg)",
                  }}
                />
                {/* Note */}
                <CldImage
                item={room.clues.note}
                  className={styles.item}
                  style={{
                    position: "absolute",
                    top: "300px",
                    left: "210px",
                    width: "50px",
                    transform: "rotate(10deg)",
                  }}
                />
                {/* blood letter */}
                <CldImage
                  item={room.clues.blood_letter}
                  className={styles.item}
                  style={{
                    position: "relative",
                    left: "10px",
                    top: "200px",
                    width: "150px",
                  }}
                />
                {/* broken watch */}
                <CldImage
                item={room.clues.broken_watch}
                  className={styles.item}
                  style={{
                    position: "relative",
                    left: "50px",
                    top: "400px",
                    width: "80px",
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
