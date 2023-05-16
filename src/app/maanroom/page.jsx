'use client'

import background from '../../../public/Rooms/MaanRoom/background.png'
import spacesword from '../../../public/Rooms/MaanRoom/spacesword.png'

import Image from 'next/image'
import styles from './components/styles.module.css'
import Map from '../Map'
import { Container, Text, Box } from '@chakra-ui/react'
export default function MaanRoom() {
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
          {/* spacesword  */}
          <Image
            src={spacesword}
            alt='spacesword'
            className={styles.item}
            style={{
              position: 'relative',
              right: '5px',
              top: '370px',
              width: '80px',
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
