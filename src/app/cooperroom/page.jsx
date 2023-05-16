'use client'

import background from '../../../public/Rooms/CooperRoom/background.png'
import luggage from '../../../public/Rooms/CooperRoom/luggage.png'
import coffeemachine from '../../../public/Rooms/CooperRoom/coffeemachine.png'
import id from '../../../public/Rooms/CooperRoom/id.png'
import newspaper from '../../../public/Rooms/CooperRoom/newspaper.png'

import Image from 'next/image'
import styles from './components/styles.module.css'
import Map from '../Map'
import { Container, Text, Box } from '@chakra-ui/react'

export default function CooperRoom() {
  return (
    <Box w={['100%', '30em']} h='40rem' p={4}>
      {/* background image */}
      <Box
        display='flex'
        justifyContent='center'
        zIndex='0'
        h='35rem'
        w='100%'
      >
        <Container position='absolute' display='flex' justifyContent='space-around' mt='1%'>
          {/* placeholders for components  */}
          <Map />
          <Box color='red' fontWeight='bold' fontSize='2vh'>
            Time placeholder
          </Box>
        </Container>
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
              top: '25rem',
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
              top: '12rem',
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
              top: '14rem',
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
              top: '10rem',
              width: '70px',
              filter: 'brightness(0.75)',
            }}
          />
        </Box>
      </Box>
      <Box mt='2%' w='100%' background='white'>
        Text Component Here
      </Box>
    </Box>
  )
}
