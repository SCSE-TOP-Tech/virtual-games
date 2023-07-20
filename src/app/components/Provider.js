"use client";

import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {},
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
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
const Provider = ({ children }) => {
  return (
    <SessionProvider>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>{" "}
      </CacheProvider>
    </SessionProvider>
  );
};
export default Provider;
