'use client'
import { Container, Box, Text } from '@chakra-ui/react'
import fetchRoom from '@/pages/api/rooms/fetchRoom';
import { Container, Box, Text } from '@chakra-ui/react'

import { useEffect, useState } from 'react';
import CldImage from '../components/CldImage';
import styles from './components/styles.module.css'

export default function SeraphineRoom() {
  const [room, setRoom] = useState(false);
  
  // Initial Load
  useEffect(() => {
    fetchRoom("seraphine", true)
      .then(data => {
        setRoom(data);
      })
  }, []);

  return (
    //bound to mobile view
    <Box w={['100%', '30em']} h='100%' p={4}>
      {/* container for background image and items*/}
      {room && (
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
            <Text color='black' fontWeight='bold' fontSize='2vh'>
              Map placeholder
            </Text>
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
            <CldImage
              item={room.dummy_objects.teddybear}
              className={styles.item}
              style={{
                position: 'relative',
                top: '525px',
                left: '40px',
                width: '80px',
              }}
            />

            {/*Jewelry box */}
            <CldImage
              item={room.dummy_objects.jewelrybox}
              className={styles.item}
              style={{
                position: 'relative',
                top: '255px',
                right: '130px',
                width: '80px',
              }}
            />

            {/* Lipstick */}
            <CldImage
              item={room.clues.lipstick}
              style={{
                position: 'relative',
                top: '450px',
                right: '120px',
                width: '40px',
                filter: 'brightness(0.75)',
              }}
            />

            {/* camera */}
            <CldImage
              item={room.dummy_objects.camera}
              style={{
                position: 'relative',
                left: '140px',
                top: '215px',
                width: '60px',
              }}
            />
          </Box>
        </Box>
      )}
        <Box position='absolute' bottom='10%' mt='2%' w='28em' background='white'>
          Text Component Here
        </Box>
    </Box>
  )
}
