"use client";
import Fonts from "@/app/fonts";
import { Box } from "@chakra-ui/react";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
export default function RoomLayout({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) redirect("/login");

  return (
    <section>
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
    </section>
  );
}
