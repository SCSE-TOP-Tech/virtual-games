'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'

export const metadata = {
  title: 'Virtual Games',
  description: 'The Tesseract',
}

const theme = extendTheme({
  colors: {},
  fonts: {},
  fontSizes: {},
  breakpoints: {
    iphone_se: '375px',
    iphone_xr: '414px', //same as galaxy s20ultra
    iphone_12pro: '390px', //same as pixel 5
    galaxy_s8plus: '360px',
  },
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Box
              display='flex'
              bg='lightgreen'
              justifyContent='center'
              w='100%'
              h={800}
            >
              {children}
            </Box>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
