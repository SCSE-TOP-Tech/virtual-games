'use client'
import styles from './components/styles.module.css'
import Map from '../Map'
import { Container, Text, Box } from '@chakra-ui/react'
import { CldImage } from "../components/ImageComp";
import { Suspense, useEffect, useState } from 'react'
import fetchRoom from '@/pages/api/rooms/fetchRoom'

export default function MaanRoom() {
  const [room, setRoom] = useState(false);
  
  // Initial Load
  useEffect(() => {
    fetchRoom("maan", true)
      .then(data => {
        setRoom(data);
      })
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}> 
    {room && 
      (<div>
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
            <CldImage 
              item={room.background}
            />
            <Box position='absolute' zIndex='1'>
              {/* spacesword  */}
              <CldImage
                item={room.dummy_objects.spacesword}
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
      </div>)
    } 
    </Suspense>
  )
}
