'use client'

import background from '../../../public/Rooms/CooperRoom/background.png'
import luggage from '../../../public/Rooms/CooperRoom/luggage.png'
import coffeemachine from '../../../public/Rooms/CooperRoom/coffeemachine.png'
import id from '../../../public/Rooms/CooperRoom/id.png'
import newspaper from '../../../public/Rooms/CooperRoom/newspaper.png'

import Image from 'next/image'
import styles from './components/styles.module.css'

import { Container, Text, Box } from '@chakra-ui/react'

export default function CooperRoom() {
  return (
    <Box w={['100%', '30em']} h='100%' p={4}>
      {/* background image */}
      <Container display='flex' justifyContent='space-around'>
        {/* placeholders for components  */}
        <Box
          color='red'
          fontWeight='bold'
          fontSize='2vh'
          background='white'
          p='10%'
        >
          Map placeholder
        </Box>
        <Box color='red' fontWeight='bold' fontSize='2vh'>
          Time placeholder
        </Box>
      </Container>
      <Box display='flex' justifyContent='center' zIndex='0' width='100%'>
        <Image src={background} alt='background' />
        <Box position='absolute' zIndex='1'>
          {/* luggage  */}
          <Image
            src={luggage}
            alt='luggage'
            className={styles.item}
            style={{
              position: 'relative',
              right: '50px',
              top: '320px',
              width: '150px',
            }}
          />
          {/* newspaper  */}
          <Image
            src={newspaper}
            alt='newspaper'
            className={styles.item}
            style={{
              position: 'relative',
              right: '40px',
              top: '70px',
              width: '70px',
              filter: 'brightness(0.75)',
            }}
          />
          {/* id  */}
          <Image
            src={id}
            alt='id'
            className={styles.item}
            style={{
              position: 'relative',
              right: '130px',
              top: '250px',
              width: '100px',
              filter: 'brightness(0.75)',
            }}
          />

          {/* coffeemachine  */}
          <Image
            src={coffeemachine}
            alt='coffeemachine'
            className={styles.item}
            style={{
              position: 'relative',
              left: '190px',
              top: '50px',
              width: '70px',
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
