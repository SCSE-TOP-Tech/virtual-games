'use client'
import { Container, Box, Text, StylesProvider } from '@chakra-ui/react'

import Image from 'next/image'
import styles from './components/styles.module.css'

import background from '../../../public/Rooms/SeraphineRoom/background.png'
import camera from '../../../public/Rooms/SeraphineRoom/camera.png'
import lipstick from '../../../public/Rooms/SeraphineRoom/lipstick.png'
import teddybear from '../../../public/Rooms/SeraphineRoom/teddybear.png'
import jewelrybox from '../../../public/Rooms/SeraphineRoom/jewelrybox.png'

export default function SeraphineRoom() {
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
            src={teddybear}
            className={styles.item}
            alt='teddybear'
            style={{
              position: 'relative',
              top: '525px',
              left: '40px',
              width: '80px',
            }}
          />

          {/*Jewelry box */}
          <Image
            src={jewelrybox}
            className={styles.item}
            alt='jewelry box'
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

          {/* camera */}
          <Image
            src={camera}
            className={styles.item}
            alt='camera'
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
