'use client'
import background from '../../../../public/Rooms/DoyleRoom/background.png'
import album from '../../../../public/Rooms/DoyleRoom/album.png'
import luggage from '../../../../public/Rooms/DoyleRoom/luggage.png'
import id from '../../../../public/Rooms/DoyleRoom/id.png'
import clothes from '../../../../public/Rooms/DoyleRoom/clothes.png'
import towel from '../../../../public/Rooms/DoyleRoom/towel.png'

import Image from 'next/image'
import styles from './styles.module.css'
import { Input, Container, Text } from '@chakra-ui/react'

export default function DoyleRoom() {
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
          <Text color='red' fontWeight='bold' fontSize='2vh'>
            Map placeholder
          </Text>
          <Text color='red' fontWeight='bold' fontSize='2vh'>
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

          {/* album */}
          <Image
            src={album}
            className={styles.item}
            style={{ right: '20vw', top: '44vh', margin: '0' }}
          />

          {/*luggage */}
          <Image
            src={luggage}
            className={styles.item}
            style={{
              right: '15vw',
              top: '50vh',
              width: '15vw',
              filter: 'brightness(0.60)',
            }}
          />

          {/* id card */}
          <Image
            src={id}
            className={styles.item}
            style={{
              right: '10vw',
              top: '50vh',
              width: '20vw',
            }}
          />

          {/* scattered clothes */}
          <Image
            src={clothes}
            className={styles.item}
            style={{
              left: '08vw',
              top: '19vh',
              width: '18vw',
              filter: 'brightness(0.70)',
            }}
          />

          {/* bloodstained small towel  */}
          <Image
            src={towel}
            className={styles.item}
            style={{
              left: '35vw',
              top: '38vh',
              width: '15vw',
              filter: 'brightness(0.5)',
            }}
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
