'use client'
import { Container, Box, Text } from '@chakra-ui/react'

import Image from 'next/image'
import styles from './components/styles.module.css'

import background from '../../../public/Rooms/RomilyRoom/background.png'
import basketball from '../../../public/Rooms/RomilyRoom/basketball.png'
import towel from '../../../public/Rooms/RomilyRoom/towel.png'
import clothes from '../../../public/Rooms/RomilyRoom/clothes.png'
import punchingbag from '../../../public/Rooms/RomilyRoom/punching-bag.png'
import dumbbell from '../../../public/Rooms/RomilyRoom/dumbbell.png'

export default function RomilyRoom() {
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
            src={basketball}
            alt='basketball'
            className={styles.item}
            style={{
              position: 'relative',
              left: '120px',
              top: '430px',
              width: '60px',
              filter: 'brightness(0.7)',
            }}
          />

          <Image
            src={punchingbag}
            alt='punchingbag'
            className={styles.item}
            style={{
              position: 'relative',
              left: '145px',
              top: '400px',
              width: '150px',
              filter: 'brightness(0.75)',
            }}
          />
          <Image
            src={towel}
            alt='towel'
            className={styles.item}
            style={{
              position: 'relative',
              top: '350px',
              width: '70px',
              filter: 'brightness(0.75)',
            }}
          />

          <Image
            src={clothes}
            alt='clothes'
            className={styles.item}
            style={{
              position: 'relative',
              right: '20px',
              top: '90px',
              width: '150px',
            }}
          />
          <Image
            src={dumbbell}
            alt='dumbbell'
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
  )
}
