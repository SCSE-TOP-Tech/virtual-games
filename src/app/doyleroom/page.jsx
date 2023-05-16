'use client'
import background from '../../../public/Rooms/DoyleRoom/background.png'
import album from '../../../public/Rooms/DoyleRoom/album.png'
import luggage from '../../../public/Rooms/DoyleRoom/luggage.png'
import id from '../../../public/Rooms/DoyleRoom/id.png'
import clothes from '../../../public/Rooms/DoyleRoom/clothes.png'
import towel from '../../../public/Rooms/DoyleRoom/towel.png'

import Image from 'next/image'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'
import Map from '../Map'

export default function DoyleRoom() {
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
          <Map />
          <Text color='red' fontWeight='bold' fontSize='2vh'>
            Time placeholder
          </Text>
        </Container>
        <Image src={background} alt='background' />
        <Box position='absolute' zIndex='1'>
          {/* album */}
          <Image
            src={album}
            className={styles.item}
            alt='album'
            style={{
              position: 'relative',
              right: '70px',
              top: '435px',
              width: '45px',
              margin: '0',
            }}
          />

          {/*luggage */}
          <Image
            src={luggage}
            className={styles.item}
            alt='luggage'
            style={{
              position: 'relative',
              right: '120px',
              top: '500px',
              width: '70px',
              filter: 'brightness(0.60)',
            }}
          />

          {/* id card */}
          <Image
            src={id}
            alt='id'
            className={styles.item}
            style={{
              position: 'relative',
              right: '50px',
              top: '450px',
              width: '100px',
            }}
          />

          {/* scattered clothes */}
          <Image
            src={clothes}
            alt='clothes'
            className={styles.item}
            style={{
              position: 'relative',
              left: '35px',
              top: '175px',
              width: '100px',
              filter: 'brightness(0.70)',
            }}
          />

          {/* bloodstained small towel  */}
          <Image
            src={towel}
            alt='towel'
            className={styles.item}
            style={{
              position: 'relative',
              left: '150px',
              top: '350px',
              width: '80px',
              filter: 'brightness(0.5)',
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
