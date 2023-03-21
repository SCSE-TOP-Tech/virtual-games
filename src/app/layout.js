'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'

export const metadata = {
  title: 'Virtual Games',
  description: 'The Tesseract'
}

const theme = extendTheme({

})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Box display='flex' bg='lightgreen' justifyContent='center' w='100%' h={800}>
              {children}
            </Box>
          </ChakraProvider>
        </CacheProvider>
      </body>

    </html>
  )
}
