'use client'
import styles from './components/styles.module.css'
import { Container, Box, Text } from '@chakra-ui/react'
import { Suspense, useEffect, useState } from 'react';
import fetchRoom from '@/pages/api/rooms/fetchRoom';
import CldImage from '../components/CldImage';
import Map from "../Map";

export default function RomilyRoom() {
  const [room, setRoom] = useState(false);
  
  // Initial Load
  useEffect(() => {
    fetchRoom("romily", true)
      .then(data => {
        setRoom(data);
      })
  }, []);

  return (
    // To add loading page
    <Suspense fallback={<h1>Loading</h1>}> 
      {room && 
        (<div>
          <Box w={['100%', '30em']} h='100%' p={4}>
            {/* container for background image and items*/}
            <Box
              display='flex'
              justifyContent='center'
              zIndex='0'
              h='90%'
              width='100%'
            >
              {/* map and time components */}
              <Container
                position='absolute'
                display='flex'
                justifyContent='space-around'
                mt='1%'
              >
                {/* placeholders for components  */}
                <Map />
                <Text color='black' fontWeight='bold' fontSize='2vh'>
                  Time placeholder
                </Text>
              </Container>
              {/* background image */}
              <CldImage 
                item={room.background}
              />
              {/* items container */}
              <Box position='absolute' zIndex='1'>
                {/*all dimensions are calculated manually lol */}
                {/* Basketball */}
                <CldImage 
                  item={room.dummy_objects.basketball}
                  className={styles.item}
                  style={{
                    position: 'relative',
                    left: '120px',
                    top: '430px',
                    width: '60px',
                    filter: 'brightness(0.7)',
                  }}
                />

                {/* Punching Bag */}
                <CldImage 
                  item={room.dummy_objects.punchingbag}
                  className={styles.item}
                  style={{
                    position: 'relative',
                    left: '145px',
                    top: '400px',
                    width: '150px',
                    filter: 'brightness(0.75)',
                  }}
                />

                {/* Towel */}
                <CldImage 
                  item={room.dummy_objects.towel}
                  className={styles.item}
                  style={{
                    position: 'relative',
                    top: '350px',
                    width: '70px',
                    filter: 'brightness(0.75)',
                  }}
                />

                {/* Clothes */}
                <CldImage 
                  item={room.dummy_objects.clothes}
                  className={styles.item}
                  style={{
                    position: 'relative',
                    right: '20px',
                    top: '90px',
                    width: '150px',
                  }}
                />
                {/* Dumbbell */}
                <CldImage 
                  item={room.dummy_objects.dumbbell}
                  className={styles.item}
                  style={{
                    position: 'relative',
                    right: '140px',
                    top: '150px',
                    width: '60px',
                  }}
                />
              </Box>
            </Box>
            <Box position='absolute' bottom='10%' mt='2%' w='28em' background='white'>
              Text Component Here
            </Box>
          </Box>
        </div>)
      } 
    </Suspense>
  )
}
