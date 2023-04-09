'use client'
import background from '../../../public/Rooms/PrincessRoom/background.png'
import door from '../../../public/Rooms/PrincessRoom/connecting-door.png'
import safe from '../../../public/Rooms/PrincessRoom/empty-safe.png'
import map from '../../../public/Rooms/PrincessRoom/infinity-stones-map.png'


import Image from 'next/image'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'

export default function PrincessRoom() {
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

            {/* safe */}
            <Image
              src={safe}
              className={styles.item}
              alt='safe'
              style={{
                position: 'relative',
                right: '116px',
                top: '458px',
                width: '180px',
                margin: '0',
              }}
            />

            {/* door */}
            <Image
              src={door}
              className={styles.item}
              alt='door'
              style={{
                position: 'relative',
                right: '-253px',
                top: '70px',
                width: '60px',
                margin: '0',
              }}
            />

            {/* map */}
            <Image
              src={map}
              className={styles.item}
              alt='map'
              style={{
                position: 'relative',
                right: '-230px',
                top: '-97px',
                width: '40px',
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
