"use client";
import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { CldImage } from "../components/ImageComp";
import { useEffect, useState } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import Navbar from "../components/Navbar";


export default function BrandRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("brand", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <div>
      {room && (
        <div>
          <Box w={["100%", "30em"]} h="100%" position='relative'>
           <Navbar />
            {/* background image */}
            <Box
              display="flex"
              justifyContent="center"
              zIndex="0"
              h="90%"
              width="100%"
            >
              
              <CldImage item={room.background} />
              <Box position="absolute" zIndex="1">
                {/* galaxy phone */}
                <CldImage
                  item={room.clues.galaxy_phone}
                  className={styles.item}
                  style={{
                    position: "relative",
                    right: "29px",
                    top: "120px",
                    width: "100%",
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
