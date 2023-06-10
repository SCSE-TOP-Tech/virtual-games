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
              <CldImageItems
                onClick={()=>textHandler(room.clues.mail.desc)}
                item={room.clues.mail}
                className={styles.item}
                location={['20rem', '10rem', 'unset', 'unset']}
                width='140px'
              />

              {/* master key */}
              <CldImageItems
                onClick={()=>textHandler(room.clues.master_key.desc)}
                item={room.clues.master_key}
                className={styles.item}
                location={['30rem', '-3rem', 'unset', 'unset']}
                width='45px'
              />

                {/* clothspin */}
                <CldImageItems
                  onClick={()=>textHandler(room.dummy_objects.clothespin.desc)}
                  item={room.dummy_objects.clothespin}
                  className={styles.item}
                  location={['30rem', '-15rem', 'unset', 'unset']}
                  width='30px'
                 
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