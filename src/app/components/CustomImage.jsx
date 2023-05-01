'use client'

import Image from 'next/image'
import { chakra } from '@chakra-ui/react'

const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['src', 'alt', 'className'].includes(prop),
})

export default CustomImage
