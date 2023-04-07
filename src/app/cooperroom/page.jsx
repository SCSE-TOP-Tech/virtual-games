'use client'

import background from '../../../public/Rooms/CooperRoom/background.png'
import luggage from '../../../public/Rooms/CooperRoom/luggage.png'
import coffeemachine from '../../../public/Rooms/CooperRoom/coffeemachine.png'
import id from '../../../public/Rooms/CooperRoom/id.png'
import newspaper from '../../../public/Rooms/CooperRoom/newspaper.png'

import Image from 'next/image'
import styles from './components/styles.module.css'

import { Container, Text, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import fetchRoom from '@/pages/api/rooms/fetchRoom'
import CldImage from '../components/CldImage'

export default function CooperPage() {
  const [room, setRoom] = useState(false);
  
  // Initial Load
  useEffect(() => {
    fetchRoom("cooper", true)
      .then(data => {
        setRoom(data);
      })
  }, []);

  return (
    <Box w={['100%', '30em']} h='100%' p={4}>
      {/* background image */}
      <Box
        display='flex'
        justifyContent='center'
        zIndex='0'
        h='90%'
        width='100%'
      >
        <Container
          position='absolute'
          display='flex'
          justifyContent='space-around'
          mt='1%'
        >
          {/* placeholders for components  */}
          <Text color='red' fontWeight='bold' fontSize='2vh'>
            Map placeholder
          </Text>
          <Text color='red' fontWeight='bold' fontSize='2vh'>
            Time placeholder
          </Text>
        </Container>
        <CldImage
          item={room.background}
        />
        <Box position='absolute' zIndex='1'>
          {/* luggage  */}
          <CldImage
            item={room.dummy_objects.luggage}
            className={styles.item}
            style={{
              position: 'relative',
              right: '70px',
              top: '450px',
              width: '200px',
            }}
          />

          {/* id  */}
          <CldImage
            item={room.dummy_objects.luggage}
            className={styles.item}
            style={{
              position: 'relative',
              right: '130px',
              top: '420px',
              width: '150px',
              filter: 'brightness(0.75)',
            }}
          />

          {/* coffeemachine  */}
          <CldImage
            item={room.dummy_objects.coffee_machine}
            className={styles.item}
            style={{
              position: 'relative',
              left: '200px',
              top: '150px',
              width: '100px',
              filter: 'brightness(0.75)',
            }}
          />

          {/* newspaper  */}
          <CldImage
            item={room.dummy_objects.newspaper}
            className={styles.item}
            style={{
              position: 'relative',
              right: '40px',
              top: '11px',
              width: '90px',
              filter: 'brightness(0.75)',
            }}
          />
        </Box>
      </Box>
      <Box position='absolute' bottom='10%' mt='2%' w='28em' background='white'>
        Text Component Here
      </Box>
    </Box>
  )
}
