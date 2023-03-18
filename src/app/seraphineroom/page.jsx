'use client'
import { Input, Container, Text } from '@chakra-ui/react'

import Image from 'next/image'
import styles from './components/styles.module.css'

import background from '../../../public/Rooms/SeraphineRoom/background.png'
import camera from '../../../public/Rooms/SeraphineRoom/camera.png'
import lipstick from '../../../public/Rooms/SeraphineRoom/lipstick.png'
import teddybear from '../../../public/Rooms/SeraphineRoom/teddybear.png'
import jewelrybox from '../../../public/Rooms/SeraphineRoom/jewelrybox.png'

export default function SeraphineRoom() {

  return (
    <>
      {/* background image */}
      <div className={styles.Container}>
        <Container
          position='absolute'
          display='flex'
          justifyContent='space-around'
          mt='2vh'
        >
          {/* placeholders for components  */}
          <Text color='black' fontWeight='bold' fontSize='2vh'>
            Map placeholder
          </Text>
          <Text color='black' fontWeight='bold' fontSize='2vh'>
            Time placeholder
          </Text>
        </Container>
        <Image
          className={styles.background}
          src={background}
          alt='background'
        />
        <div className={styles.itemsContainer}>
          {/*all dimensions are calculated from center */}
          <Image
            src={teddybear}
            className={styles.item}
            style={{ left: '7vw', top: '55vh' }}
          />

          {/*Jewelry box */}
          <Image
            src={jewelrybox}
            className={styles.item}
            style={{ right: '30vw', top: '28vh' }}
          />

          {/* Lipstick */}
          <Image
            src={lipstick}
            className={styles.item}
            style={{
              right: '37vw',
              top: '47vh',
              width: '10vw',
              filter: 'brightness(0.75)',
            }}
          />

          {/* camera */}
          <Image
            src={camera}
            className={styles.item}
            style={{ left: '28vw', top: '24vh', width: '10vw' }}
          />
        </div>
      </div>
      <Input
        position='absolute'
        top='68vh'
        left='0vw'
        size='sm'
        placeholder='Text Box'
      />
    </>
  )
}
