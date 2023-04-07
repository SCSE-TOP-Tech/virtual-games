'use client'
import background from '../../../public/Rooms/CarmenRoom/carmenbg.png'
import clothspin from '../../../public/Rooms/CarmenRoom/clothspin.png'
import mail from '../../../public/Rooms/CarmenRoom/mail.png'
import masterkey from '../../../public/Rooms/CarmenRoom/master-key.png'

import Image from 'next/image'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'

export default function CarmenRoom() {
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


          {/* mail */}
          <Image
            src={mail}
            className={styles.item}
            alt='mail'
            style={{
              position: 'relative',
              right: '175px',
              top: '318px',
              width: '140px',
              margin: '0',
            }}
          />

          {/* master key */}
          <Image
            src={masterkey}
            className={styles.item}
            alt='masterkey'
            style={{
              position: 'relative',
              right: '-50px',
              top: '490px',
              width: '45px',
              margin: '0',
            }}
          />

            {/* clothspin */}
            <Image
              src={clothspin}
              className={styles.item}
              alt='clothspin'
              style={{
                position: 'relative',
                right: '-240px',
                top: '480px',
                width: '30px',
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
