"use client";
import Fonts from "@/app/fonts";
import { Box } from "@chakra-ui/react";

export default function TransitionLayout({ children }) {
  return (
    <section>
      <Fonts />
      <Box display="flex" bg="black" justifyContent="center" w="100%" h={800}>
        {children}
      </Box>
    </section>
  );
}
