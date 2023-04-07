'use client'
import { Container, Box, Text, StylesProvider } from '@chakra-ui/react'

import Image from 'next/image'
import styles from './components/styles.module.css'

import background from '../../../public/Rooms/Clinic/clinic.png'


export default function Clinic() {
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

      </Box>
      <Box position='absolute' bottom='10%' mt='2%' w='28em' background='white'>
        Text Component Here
      </Box>
    </Box>
  )
}
