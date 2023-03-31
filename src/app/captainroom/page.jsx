'use client'
import { Container, Box, Text, StylesProvider } from '@chakra-ui/react'

import Image from 'next/image'
import styles from './components/styles.module.css'

import background from '../../../public/Rooms/CaptainRoom/background.png'
import musicalbums from '../../../public/Rooms/CaptainRoom/musicalbums.png'
import spacegun from '../../../public/Rooms/CaptainRoom/spacegun.png'
import lipstick from '../../../public/Rooms/CaptainRoom/lipstick.png'
import brokenwatch from '../../../public/Rooms/CaptainRoom/brokenwatch.png'
//import note from '../../../public/Rooms/CaptainRoom/note.png'
import guestbook from '../../../public/Rooms/CaptainRoom/guestbook.png'
import bloodletter from '../../../public/Rooms/CaptainRoom/bloodletter.png'

export default function CaptainRoom() {
    return (
      //bound to mobile view
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
            <Text color='black' fontWeight='bold' fontSize='2vh'>
              Map placeholder
            </Text>
            <Text color='black' fontWeight='bold' fontSize='2vh'>
              Time placeholder
            </Text>
          </Container>
          {/* background image */}
          <Image src={background} alt='background' />
          {/* items container */}
          <Box position='absolute' zIndex='1'>
            {/*all dimensions are calculated manually lol */}
            <Image
              src={musicalbums}
              className={styles.item}
              alt='musicalbums'
              style={{
                position: 'relative',
                top: '525px',
                left: '40px',
                width: '80px',
              }}
            />
  
            {/*spacegun*/}
            <Image
              src={spacegun}
              className={styles.item}
              alt='space gun'
              style={{
                position: 'relative',
                top: '255px',
                right: '130px',
  
                width: '80px',
              }}
            />
  
            {/* Lipstick */}
            <Image
              src={lipstick}
              className={styles.item}
              alt='lipstick'
              style={{
                position: 'relative',
                top: '450px',
                right: '120px',
                width: '40px',
                filter: 'brightness(0.75)',
              }}
            />
  
            {/* blood letter */}
            <Image
              src={bloodletter}
              className={styles.item}
              alt='blood letter'
              style={{
                position: 'relative',
                left: '140px',
                top: '215px',
                width: '60px',
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