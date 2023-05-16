'use client'
import background from '../../../public/Rooms/BrandRoom/brandbg.png'
import phone from '../../../public/Rooms/BrandRoom/galaxy-phone.png'

import Image from 'next/image'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'
import Map from '../Map'

export default function BrandRoom() {
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

          {/* galaxy phone */}
          <Image
            src={phone}
            className={styles.item}
            alt='album'
            style={{
              position: 'relative',
              right: '29px',
              top: '120px',
              width: '100%',
              margin: '0',
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
