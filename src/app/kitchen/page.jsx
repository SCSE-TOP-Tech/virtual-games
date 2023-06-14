"use client";
import styles from "./components/styles.module.css";
import { Container, Box } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import Map from "../Map";
import { CldImage } from "@/app/components/ImageComp";

export default function Kitchen() {
  const [room, setRoom] = useState(false);

    useEffect(() => {
      fetchRoom("kitchen", false).then((data) => {
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
            <CldImage item={room.background}/>

            {/* items */}
            <Box position="absolute" zIndex="1">

               {/* blood stained knife (temp viewing) */}
               <CldImage
                    item={room.clues.knife}
                    style={{
                      position: "relative",
                      right: "5.7rem",
                      top: "14.8rem",
                      width: "4.2rem",
                      margin: "0",
                    }}
                    className={styles.item}
                  />

                {/* blood stained meat (temp viewing) */}
                <CldImage
                    item={room.clues.meat}
                    style={{
                      position: "relative",
                      right: "7.6rem",
                      top: "12.9rem",
                      width: "3.8rem",
                      margin: "0",
                    }}
                    className={styles.item}
                  />

                {/* blood stained apron (temp viewing) */}
                <CldImage
                    item={room.clues.apron}
                    style={{
                      position: "relative",
                      right: "-1rem",
                      top: "17rem",
                      width: "5rem",
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