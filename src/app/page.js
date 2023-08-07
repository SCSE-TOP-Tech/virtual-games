"use client";
import Link from "next/link";
import { Text, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();

  return (
    <>
      <Box
        display="flex"
        w="100vw"
        justifyContent="center"
        bg="black"
        //bg={`url('https://th.bing.com/th/id/R.93220e00b3059a676fe603b32b9b4c5b?rik=Zn0Coiu3yTKjpQ&riu=http%3a%2f%2fi.makeagif.com%2fmedia%2f9-19-2015%2fbTPrOV.gif&ehk=M%2fOPDEaToM58l5kzE5samqOXQrKhRXaG%2b0%2bScFW8KrI%3d&risl=1&pid=ImgRaw&r=0')`}
        bgSize="cover"
        height="100vh"
        padding={0}
        margin={0}
      >
        <Box>
          <Text fontSize="xl" color="white" align="center" fontFamily="serif">
            SCSE TOP 23/24 Presents
          </Text>
          <Text fontSize="5xl" color="white" align="center" fontFamily="serif">
            Space Odessey
          </Text>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            minH="40vh"
          >
            <Button
              colorScheme="facebook"
              fontSize="3xl"
              padding="2rem"
            >
              <Link href="/login">Start adventure!</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
