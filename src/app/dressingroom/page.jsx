'use client'
import background from '../../../public/Rooms/DressingRoom/background.png'
import lipstick from '../../../public/Rooms/DressingRoom/lipstick.png'

import Image from 'next/image'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'

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
          <Text color='red' fontWeight='bold' fontSize='2vh'>
            Map placeholder
          </Text>
          <Text color='red' fontWeight='bold' fontSize='2vh'>
            Time placeholder
          </Text>
        </Container>
        <Image src={background} alt='background' />
        <Box position='absolute' zIndex='1'>
          
          {/* lipstick*/}
          <Image
            src={lipstick}
            alt='id'
            className={styles.item}
            style={{
              position: 'relative',
              right: '50px',
              top: '365px',
              width: '35px',
              transform: 'rotate(-60deg)'
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
