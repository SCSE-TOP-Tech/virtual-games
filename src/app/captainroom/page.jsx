'use client'
import spaceguns from '../../../public/Rooms/CaptainRoom/spaceguns.png'
import lipstick from '../../../public/Rooms/CaptainRoom/lipstick.png'
import brokenwatch from '../../../public/Rooms/CaptainRoom/brokenwatch.png'
import note from '../../../public/Rooms/CaptainRoom/note.png'
import guestbook from '../../../public/Rooms/CaptainRoom/guestbook.png'
import bloodletter from '../../../public/Rooms/CaptainRoom/bloodletter.png'
import musicalbums from '../../../public/Rooms/CaptainRoom/musicalbums.png'
import background from '../../../public/Rooms/CaptainRoom/background.png'



import Image from 'next/image'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'

export default function CaptainRoom() {
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
            <Text color='white' fontWeight='bold' fontSize='2vh'>
              Map placeholder
            </Text>
            <Text color='white' fontWeight='bold' fontSize='2vh'>
              Time placeholder
            </Text>
          </Container>
          {/* background image */}
          <Image src={background} alt='background' />
          {/* items container */}
          <Box position='absolute' zIndex='1'>
            {/*all dimensions are calculated manually lol */}
            <Image
              src={musicalbums}
              className={styles.item}
              alt='musicalbums'
              style={{
                position: 'relative',
                top: '255px',
                right: '130px',
                width: '80px',
              }}
            />

            {/*spaceguns*/}
            {/* <Image
              src={spaceguns}
              className={styles.item}
              alt='space gun'
              style={{
                position: 'relative',
                top: '255px',
                right: '130px',
                width: '80px',
              }}
            /> */}

            {/* Lipstick */}
            <Image
              src={lipstick}
              className={styles.item}
              alt='lipstick'
              style={{
                position: 'absolute',
                top: '400px',
                left: '-100px',
                width: '40px',
                transform: 'rotate(-60deg)'
              }}
            />

            {/* Guestbook */}
            <Image
              src={guestbook}
              className={styles.item}
              alt='guestbook'
              style={{
                position: 'absolute',
                top: '440px',
                right: '1px',
                left: '190px',
                width: '70px',
                transform: 'rotate(10deg)'
                          }}
            />
            {/* Note */}
            <Image
              src={note}
              className={styles.item}
              alt='note'
              style={{
                position: 'absolute',
                top: '300px',
                left: '210px',
                width: '50px',
                transform: 'rotate(10deg)'
                          }}
            />
            {/* blood letter */}
            <Image
              src={bloodletter}
              className={styles.item}
              alt='blood letter'
              style={{
                position: 'relative',
                left: '10px',
                top: '200px',
                width: '150px',
              }}
            />
            {/* broken watch */}
            <Image
              src={brokenwatch}
              className={styles.item}
              alt='broken watch'
              style={{
                position: 'relative',
                left: '50px',
                top: '400px',
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