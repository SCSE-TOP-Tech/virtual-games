"use client";
import Fonts from "@/app/fonts";
import { Box } from "@chakra-ui/react";

export default function RoomLayout({ children }) {
  return (
    <section>
      <Fonts />
      <Box
        display="flex"
        bg="lightgreen"
        justifyContent="center"
        w="100vw"
        h={800}
      >
        {children}
      </Box>
    </section>
  );
}
