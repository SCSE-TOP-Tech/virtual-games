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
          {/* luggage  */}
          <Image
            src={luggage}
            alt='luggage'
            className={styles.item}
            style={{
              position: 'relative',
              right: '70px',
              top: '450px',
              width: '200px',
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
              top: '420px',
              width: '150px',
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
              left: '200px',
              top: '150px',
              width: '100px',
              filter: 'brightness(0.75)',
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
              top: '11px',
              width: '90px',
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
