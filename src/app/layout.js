"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {},
  fonts: {},
  fontSizes: {},
  breakpoints: {
    iphone_se: "375px",
    iphone_xr: "414px",
    iphone_12pro: "390px",
    pixel_5: "393px",
    galaxy_s8plus: "360px",
    galaxy_s20ultra: "412px",
    ipad_air: "820px",
    ipad_mini: "768px",
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Box
              display="flex"
              bg="lightgreen"
              justifyContent="center"
              w="100%"
              h={800}
            >
              {children}
            </Box>
          </ChakraProvider>
        </CacheProvider>
      </body>

    </html>
  );
}
