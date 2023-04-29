'use client'
import { Container, Box, Text } from '@chakra-ui/react'

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
      {/* map and time components */}
      <Container display='flex' justifyContent='space-around'>
        {/* placeholders for components  */}
        <Box color='red' fontWeight='bold' fontSize='2vh' p='10%'>
          Map placeholder
        </Box>
        <Box color='red' fontWeight='bold' fontSize='2vh' p='10%'>
          Time placeholder
        </Box>
      </Container>
      <Box display='flex' justifyContent='center' zIndex='0' width='100%'>
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
              top: '325px',
              left: '40px',
              width: '55px',
            }}
          />

          {/*Jewelry box */}
          <Image
            src={jewelrybox}
            className={styles.item}
            alt='jewelry box'
            style={{
              position: 'relative',
              top: '150px',
              right: '135px',
              width: '70px',
            }}
          />

          {/* Lipstick */}
          <Image
            src={lipstick}
            className={styles.item}
            alt='lipstick'
            style={{
              position: 'relative',
              top: '260px',
              right: '150px',
              width: '30px',
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
              left: '145px',
              top: '120px',
              width: '40px',
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
