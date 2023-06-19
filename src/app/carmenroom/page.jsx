'use client'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'
import { ItemImage, SizeFormatter, CustomBgImage } from "../components/ImageComp";
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
      (<Box w={['100%', '30rem']} h='100%' p={4} position='relative'>
        <Container display="flex" justifyContent="space-around">
            <Map />
            <Box color="red" fontWeight="bold" fontSize="2vh">
              Time placeholder
            </Box>
          </Container>
          <Box
            display='flex'
            justifyContent='center'
            zIndex='0'
            h='90%'
            width='100%'
          >
            {/* background image */}
            <CustomBgImage item={room.background} height='58%'/>
            {/* items */}
            <Box position='absolute' zIndex='1'>
              {/* mail */}
              <Hint>
              <ItemImage
                item={room.clues.mail}
                className={styles.item}
                width='5.9rem'
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
                  "11rem",
                  "10.9rem",
                  "10.9rem",
                  "10.9rem",
                  "10.9rem",
                  "10.9rem",
                  "10.9rem",
                  "10.9rem"
                )}
              />
              </Hint>
              
              {/* master key */}
              <Hint>
              <ItemImage
                item={room.clues.master_key}
                className={styles.item}
                width='2rem'
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
                  "16.7rem",
                  "16.7rem",
                  "16.3rem",
                  "16.4rem",
                  "16.3rem",
                  "16.5rem",
                  "16.5rem",
                  "16.5rem"
                )}
              />
              </Hint>
              
              {/* clothspin */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.clothespin}
                  className={styles.item}
                  location={['30rem', '-15rem', 'unset', 'unset']}
                  width='1.5rem'
                  right={SizeFormatter(
                    "-10rem", //iphone se
                    "-12.2rem", //iphone xr
                    "-12rem", //iphone 12pro
                    "-12rem", //pixel 5
                    "-11rem", //samsung galaxy s8+
                    "-12rem", //samsung galaxy s20 ultra
                    "-14rem", //ipad air
                    "-14rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "16rem",
                    "16rem",
                    "16rem",
                    "16rem",
                    "16rem",
                    "16rem",
                    "16rem",
                    "16rem"
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