'use client'
import styles from './components/styles.module.css'
import { Container, Text, Box } from '@chakra-ui/react'
import { CldImage, CldImageItems } from '../components/ImageComp'
import { Suspense, useEffect, useState } from 'react'
import fetchRoom from '@/pages/api/rooms/fetchRoom'
import Map from "../Map";

export default function CarmenRoom() {

  const [room, setRoom] = useState(false);
  const [text, setText] = useState("Carmen's Room");
  
  // Initial Load
  useEffect(() => {
    fetchRoom("carmen", true)
      .then(data => {
        setRoom(data);
      })
  }, []);

  const textHandler = (text) => { 
    setText(text);
  }
  return (
    <Suspense fallback={<h1>Loading</h1>}> 
    {room && 
      (<div>
        <Box w={['100%', '30rem']} h='100%' p={4}>
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


              {/* mail */}
              <CldImage
                item={room.clues.mail}
                className={styles.item}
                style={{
                  position: 'relative',
                  right: '175px',
                  top: '318px',
                  width: '140px',
                  margin: '0',
                }}
              />

              {/* master key */}
              <CldImage
                item={room.clues.master_key}
                className={styles.item}
                style={{
                  position: 'relative',
                  right: '-50px',
                  top: '490px',
                  width: '45px',
                  margin: '0',
                }}
              />

                {/* clothspin */}
                <CldImage
                  item={room.dummy_objects.clothespin}
                  className={styles.item}
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
            {text}
          </Box>
        </Box>
      </div>)}
    </Suspense>
  )
}