"use client";
import styles from "./components/styles.module.css";
import { Container, Text, Box, IconButton } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import { useEffect, useState, Suspense } from "react";
import { CldImage, ItemImage, SizeFormatter } from "../components/ImageComp";
import Navbar from "../components/Navbar";
import Hint from "../components/Hint";

export default function PrincessRoom() {
  const [room, setRoom] = useState(false);
  const [inspect, showMap] = useState(false);

  const toggleMap = () => {
    showMap(!inspect);
  }

  // Initial Load
  useEffect(() => {
    fetchRoom("princess_white", true).then((data) => {
      setRoom(data);
    });
  }, []);
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            <CldImage item={room.background} />

            {inspect &&
              <Box position='absolute' top='1rem' right='1.5rem' width='15rem' display='flex'>
                <IconButton
                  position='relative'
                  aria-label='Call App'
                  fontSize='2rem'
                  icon={<MdClose />}
                  onClick={toggleMap}
                  borderRadius='50%'
                  marginRight='0.5rem'
                />

                <img
                  src="rooms/Princessroom/infinity-stones-map.png"
                  alt="dead doctor"
                  style={{
                    position: "relative",
                    right: "0rem",
                    top: "0rem",
                    width: "13rem",
                    margin: "0",
                    zIndex: "10"
                  }}
                  className={styles.item}
                />
              </Box>
            }

            <Box position="absolute" zIndex="1">
              {/* safe */}
              <Hint>
                <ItemImage
                  item={room.clues.safe}
                  className={styles.item}
                  width={['6.1rem', '6.1rem', '6.1rem', '6.1rem', '6.1rem', '6.1rem', '7.1rem', '7.1rem']}
                  filter="auto"
                  brightness='70%'
                  right={SizeFormatter(
                    "6.6rem", //iphone se
                    "7.5rem", //iphone xr
                    "7.3rem", //iphone 12pro
                    "7.3rem", //pixel 5
                    "6.5rem", //samsung galaxy s8+
                    "7.9rem", //samsung galaxy s20 ultra
                    "9.1rem", //ipad air
                    "9.1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "14.2rem",
                    "16rem",
                    "14.9rem",
                    "15rem",
                    "13.5rem",
                    "15.9rem",
                    "18.9rem",
                    "18.9rem"
                  )}
                />
              </Hint>

              {/* door */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.door}
                  className={styles.item}
                  width='1.4rem'
                  height='13rem'
                  filter="auto"
                  brightness='70%'
                  left={SizeFormatter(
                    "12.4rem", //iphone se
                    "13.6rem", //iphone xr
                    "12.85rem", //iphone 12pro
                    "12.9rem", //pixel 5
                    "11.9rem", //samsung galaxy s8+
                    "13.5rem", //samsung galaxy s20 ultra
                    "16.1rem", //ipad air
                    "16.1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "0rem",
                    "2rem",
                    "1rem",
                    "1rem",
                    "0rem",
                    "2rem",
                    "4.9rem",
                    "4.9rem"
                  )}
                />
              </Hint>
              {/* map */}
              <Hint>
                <ItemImage
                  item={room.clues.map}
                  className={styles.item}
                  width={['1.6rem','1.6rem','1.6rem','1.6rem','1.6rem','1.6rem','2.15rem','2.15rem' ]}
                  filter="auto"
                  brightness='90%'
                  right={SizeFormatter(
                    "5rem", //iphone se
                    "5.4rem", //iphone xr
                    "5.4rem", //iphone 12pro
                    "5.3rem", //pixel 5
                    "4.5rem", //samsung galaxy s8+
                    "5.5rem", //samsung galaxy s20 ultra
                    "6.8rem", //ipad air
                    "6.8rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "5.2rem",
                    "3.75rem",
                    "4.6rem",
                    "4.5rem",
                    "5.8rem",
                    "3.8rem",
                    "2.25rem",
                    "2.25rem"
                  )}
                  onClick={toggleMap}
                />
              </Hint>
            </Box>
          </Box>
          <Box
            mt="2%"
            w="100%"
            background="white"
          >
            Text Component Here
          </Box>
        </Box>
      )}
    </Suspense>
  );
}
