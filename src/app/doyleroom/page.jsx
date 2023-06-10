"use client";

import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import CldImage from "../components/ImageComp";
import Map from "../Map";

export default function DoyleRoom() {
  const [room, setRoom] = useState(false);
  
  // Initial Load
  useEffect(() => {
    fetchRoom("doyle", true)
      .then(data => {
        setRoom(data);
      })
  }, []);

  return (
    // To add loading page
    <Suspense fallback={<h1>Loading</h1>}> 
      {room && 
        (<div>
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
                <CldImage
                  item={room.background}
                />
                <Box position="absolute" zIndex="1">
                  {/* album */}
                  <CldImage
                    item={room.clues.music_albums}
                    className={styles.item}
                    style={{
                      position: "relative",
                      right: "70px",
                      top: "435px",
                      width: "45px",
                      margin: "0",
                    }}
                  />

                  {/*luggage */}
                  <CldImage
                    item={room.dummy_objects.luggage}
                    className={styles.item}
                    style={{
                      position: "relative",
                      right: "120px",
                      top: "500px",
                      width: "70px",
                      filter: "brightness(0.60)",
                    }}
                  />

                  {/* id card */}
                  <CldImage
                    item={room.clues.spaceID_card}
                    className={styles.item}
                    style={{
                      position: "relative",
                      right: "50px",
                      top: "450px",
                      width: "100px",
                    }}
                  />

                  {/* clothes */}
                  <CldImage 
                    item={room.dummy_objects.clothes} 
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
                  <CldImage
                    item={room.clues.bloodstained_towel}
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
      
            <Box position="absolute" bottom="10%" mt="2%" w="28em" background="white">
              Text Component Here
            </Box>
          </Box>
        </div>
        )}
    </Suspense>
  );
}
