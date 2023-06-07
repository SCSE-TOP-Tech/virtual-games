'use client'
import styles from './components/styles.module.css'
import Map from '../Map'
import { Container, Text, Box } from '@chakra-ui/react'
import CldImage from '../components/CldImage'
import { Suspense, useEffect, useState } from 'react'
import fetchRoom from '@/pages/api/rooms/fetchRoom'
import createUser from '@/pages/api/prisma/user/createUser'
import updateTimer from '@/pages/api/prisma/timer/updateTimer'
import updateScore from '@/pages/api/prisma/score/updateScore'

export default function MaanRoom() {
  const [room, setRoom] = useState(false);
  
  // Initial Load
  useEffect(() => {
    fetchRoom("maan", true)
      .then(data => {
        setRoom(data);
      })
  }, []);

  const submitHandler = async(e) => {
    e.preventDefault();
    updateScore({
      id: "1",
      timerScore: 10, 
      hintScore: 2, 
      culpritScore: 5
    })
  }

  const csubmitHandler = async(e) => {
    e.preventDefault();
    const body = { 
      email: "2",
      password: "1",
    };
    createUser(body)
  }

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
              <button onClick={submitHandler}>
                yes
              </button>
              <button onClick={csubmitHandler} className='text-white'>
                no
              </button>
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
