'use client'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'
import { ItemImage, SizeFormatter, CldImage } from "../components/ImageComp";
import { Suspense, useEffect, useState } from 'react'
import fetchRoom from '@/pages/api/rooms/fetchRoom'
import Map from "../Map";
import Hint from '../components/Hint';

export default function CarmenRoom() {
  const [room, setRoom] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchRoom("carmen", true)
      .then(data => {
        setRoom(data);
      })
  }, []);

  const textHandler = (text) => {
    setText(text);
  }
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room &&
        (<Box w={["100%", "30em"]} h="100%" p={4} position="relative">
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
            <CldImage item={room.background} />
            {/* items */}
            <Box position='absolute' zIndex='1'>
              {/* mail */}
              <Hint>
                <ItemImage
                  item={room.clues.mail}
                  className={styles.item}
                  width='5.9rem'
                  filter="auto"
                  brightness='76%'
                  right={SizeFormatter(
                    "8rem", //iphone se
                    "9rem", //iphone xr
                    "8.3rem", //iphone 12pro
                    "8.3rem", //pixel 5
                    "7.8rem", //samsung galaxy s8+
                    "8.7rem", //samsung galaxy s20 ultra
                    "10.2rem", //ipad air
                    "10.2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "8.8rem",
                    "10.3rem",
                    "9.3rem",
                    "9.6rem",
                    "8.3rem",
                    "10.2rem",
                    "12.7rem",
                    "12.7rem"
                  )}
                />
              </Hint>

              {/* master key */}
              <Hint>
                <ItemImage
                  item={room.clues.master_key}
                  className={styles.item}
                  width='2rem'
                  filter="auto"
                  brightness='76%'
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1.3rem", //samsung galaxy s20 ultra
                    "1.3rem", //ipad air
                    "1.4rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "13rem",
                    "15.7rem",
                    "14rem",
                    "14.4rem",
                    "12.3rem",
                    "15.5rem",
                    "19.5rem",
                    "19.5rem"
                  )}
                />
              </Hint>

              {/* clothspin */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.clothespin}
                  className={styles.item}
                  width='1.5rem'
                  filter="auto"
                  brightness='20%'
                  right={SizeFormatter(
                    "-11rem", //iphone se
                    "-12.2rem", //iphone xr
                    "-12rem", //iphone 12pro
                    "-12rem", //pixel 5
                    "-11rem", //samsung galaxy s8+
                    "-12rem", //samsung galaxy s20 ultra
                    "-14rem", //ipad air
                    "-14rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12.7rem",
                    "15rem",
                    "13.6rem",
                    "14rem",
                    "11.8rem",
                    "15rem",
                    "19rem",
                    "19rem"
                  )}
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
  )
}