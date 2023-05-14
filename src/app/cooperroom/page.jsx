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

import { Container, Box } from '@chakra-ui/react'

export default function CooperRoom() {
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
          {/* custom image is used */}
          <CustomImage
            src={luggage}
            alt='luggage'
            className={styles.item}
            position='relative'
            top={{
              iphone_se: '32%',
              iphone_xr: '35%',
              iphone_12pro: '32%',
              galaxy_s8plus: '28%',
            }}
            left={{ galaxy_s8plus: '30%' }}
            width={{
              iphone_se: '110px',
              iphone_xr: '115px',
              iphone_12pro: '115px',
              galaxy_s8plus: '110px',
            }}
          />

          {/* newspaper  */}
          <CustomImage
            src={newspaper}
            alt='newspaper'
            className={styles.item}
            position='relative'
            top={{
              iphone_se: '26%',
              iphone_xr: '30%',
              iphone_12pro: '26%',
              galaxy_s8plus: '24%',
            }}
            right={{
              iphone_se: '35%',
              iphone_xr: '35%',
              iphone_12pro: '35%',
              galaxy_s8plus: '30%',
            }}
            width={{
              iphone_se: '50px',
              iphone_xr: '55px',
              iphone_12pro: '50px',
              galaxy_s8plus: '50px',
            }}
            filter='auto'
            brightness='75%'
          />

          {/* id  */}
          <CustomImage
            src={id}
            alt='id'
            className={styles.item}
            position='relative'
            top={{
              iphone_se: '2.5%',
              iphone_xr: '3.5%',
              iphone_12pro: '2.5%',
              galaxy_s8plus: '1%',
            }}
            right='87%'
            width={{
              iphone_se: '100px',
              iphone_xr: '105px',
              iphone_12pro: '100px',
              galaxy_s8plus: '100px',
            }}
            filter='auto'
            brightness='70%'
          />

          {/* coffeemachine  */}
          <CustomImage
            src={coffeemachine}
            alt='coffeemachine'
            className={styles.item}
            position='relative'
            top={{
              iphone_se: '2%',
              iphone_xr: '3.5%',
              iphone_12pro: '2%',
              galaxy_s8plus: '1%',
            }}
            left={{
              iphone_se: '129%',
              iphone_xr: '131%',
              iphone_12pro: '129%',
              galaxy_s8plus: '128%',
            }}
            width={{
              iphone_se: '55px',
              iphone_xr: '60px',
              iphone_12pro: '55px',
              galaxy_s8plus: '55px',
            }}
            filter='auto'
            brightness='75%'
          />
        </Box>
      </Box>
      <Box mt='2%' w={['100%', '28em']} background='white'>
        Text Component Here
      </Box>
    </Box>
  )
}
