'use client'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'
import { CldImage } from "../components/ImageComp";
import { Suspense, useEffect, useState } from 'react'
import fetchRoom from '@/pages/api/rooms/fetchRoom'
import Navbar from "../components/Navbar";

export default function Hallway() {

  const [room, setRoom] = useState(false);
  
  // Initial Load
  useEffect(() => {
    fetchRoom("hallway", false)
      .then(data => {
        setRoom(data);
      })
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}> 
    {room && 
      (<div>
        <Box w={['100%', '30em']} h='100%' >
        <Navbar />
          {/* background image */}
          <Box
            display='flex'
            justifyContent='center'
            zIndex='0'
            h='90%'
            width='100%'
          >
            <CldImage item={room.background}/>
            <Box position='absolute' zIndex='1'>

              {/* sibling-photo */}
              <CldImage
                item={room.clues.portrait}
                className={styles.item}
                style={{
                  position: 'relative',
                  right: '-56px',
                  top: '370px',
                  width: '20px',
                  margin: '0',
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
