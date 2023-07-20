"use client";
import { Box } from "@chakra-ui/react";
import Fonts from "./fonts";
import Provider from "@/app/components/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Fonts />
          <Box
            display="flex"
            bg="lightgreen"
            justifyContent="center"
            w="100%"
            h={800}
          >
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
