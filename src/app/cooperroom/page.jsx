//test for image scaling
//use cooper room as an example
'use client'
import CustomImage from '../components/CustomImage'
import background from '../../../public/Rooms/CooperRoom/background.png'
import luggage from '../../../public/Rooms/CooperRoom/luggage.png'
import coffeemachine from '../../../public/Rooms/CooperRoom/coffeemachine.png'
import id from '../../../public/Rooms/CooperRoom/id.png'
import newspaper from '../../../public/Rooms/CooperRoom/newspaper.png'

import Image from 'next/image'
import styles from './components/styles.module.css'

import { Container, Text, Box } from '@chakra-ui/react'

export default function Test() {
  return (
    <Box w={['100%', '30em']} h='100%' p={4}>
      {/* background image */}
      <Container display='flex' justifyContent='space-around'>
        {/* placeholders for components  */}
        <Box color='red' fontWeight='bold' fontSize='12px' p='5%'>
          Map placeholder
        </Box>
        <Box color='red' fontWeight='bold' fontSize='12px' p='5%'>
          Time placeholder
        </Box>
      </Container>
      <Box display='flex' justifyContent='center' zIndex='0' width='100%'>
        <Image src={background} alt='background' />
        <Box position='absolute' zIndex='1' height='100%'>
          {/* luggage  */}
          <CustomImage
            src={luggage}
            alt='luggage'
            className={styles.item}
            position='relative'
            top={{ base: '32%', sm: '40%' }}
            width={{ base: '110px', sm: '135px', md: '150px' }}
          />

          {/* newspaper  */}
          <CustomImage
            src={newspaper}
            alt='newspaper'
            className={styles.item}
            position='relative'
            top={{ base: '28%', sm: '35%' }}
            right='35%'
            width={{ base: '60px', sm: '80px' }}
            filter='auto'
            brightness='75%'
          />

          {/* id  */}
          <CustomImage
            src={id}
            alt='id'
            className={styles.item}
            position='relative'
            top={{ base: '25%', sm: '30%' }}
            right='90%'
            width={{ base: '90px', sm: '100px' }}
            filter='auto'
            brightness='70%'
          />

          {/* coffeemachine  */}
          <CustomImage
            src={coffeemachine}
            alt='coffeemachine'
            className={styles.item}
            position='relative'
            top={{ base: '5%', sm: '5%' }}
            left={{ base: '130%', sm: '120%' }}
            width={{ base: '60px', sm: '75px' }}
            filter='auto'
            brightness='75%'
          />
        </Box>
      </Box>
      <Box position='absolute' mt='2%' w={['100%', '28em']} background='white'>
        Text Component Here
      </Box>
    </Box>
  )
}
