'use client'

import Image from 'next/image'
import { chakra } from '@chakra-ui/react'

//to use next13 image together with chakra styling
const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['src', 'alt', 'className'].includes(prop),
})

export default CustomImage
