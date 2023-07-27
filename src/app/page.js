"use client";
import { useEffect, useState } from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'


export default async function Home() {
  const router = useRouter();

  useEffect(
    () => window.addEventListener("scroll", () => {

      document.getElementById('fadetarget1').style.opacity = 100
      
      if (window.scrollY > window.screen.height/3) {
        document.getElementById('fadetarget2').style.opacity = 100
      }

      if (window.scrollY > window.screen.height/2) {
        document.getElementById('fadetarget3').style.opacity = 100
      }

    }), []
  )


  return (
    <>
      <Box
        display="flex"
        w="100%"
        justifyContent="center"
        bg={`url('https://th.bing.com/th/id/R.93220e00b3059a676fe603b32b9b4c5b?rik=Zn0Coiu3yTKjpQ&riu=http%3a%2f%2fi.makeagif.com%2fmedia%2f9-19-2015%2fbTPrOV.gif&ehk=M%2fOPDEaToM58l5kzE5samqOXQrKhRXaG%2b0%2bScFW8KrI%3d&risl=1&pid=ImgRaw&r=0')`}
        bgSize="cover"
        height="80vh"
        padding={0}
        margin={0}
      ><Box>
          <Text fontSize='xl' color="white" align='center' fontStyle='italic' fontFamily='math'>
            SCSE TOP Presents
          </Text>
          <Text fontSize="5xl" color="white" align='center' fontFamily='monospace'>
            TOP 23/24 Virtual Games
          </Text>
          <Box display='flex' justifyContent='space-around' alignItems='center' minH='40vh' >
            <Button colorScheme="blue" onClick={() => router.push("/signup")}>Sign Up</Button>
            <Button colorScheme="gray" rightIcon={<ChevronRightIcon />}
              onClick={() => signIn("credentials", { callbackUrl: "/rooms/hallway" })}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>

      <Box bgColor='black' >

        <Box display='flex' justifyContent='space-between'  id='fadetarget1' opacity={0} transition='opacity 1s ease-in'>
          <Text color='white' w='60vw' px='1rem' py='0.5rem' fontSize='md'>
            In a distant corner of the universe lies the Black Eye Galaxy, ruled by the almighty King White. This kingdom holds a precious artifact known as the space stone which has incredible value and is carefully stored within the Tesseract. The responsibility of protecting this invaluable stone falls upon the Knight of Interstellar, a loyal guardian in service to King White.
          </Text>
          <Box pr='1em' pt='1em'>
            <Image
              src='/Rooms/Storage/selfie.png'
              width={100}
              height={100}
            />
          </Box>
        </Box>

        <Box display='flex' justifyContent='space-between'  id='fadetarget2' opacity={0} transition='opacity 1s ease-in'>

          <Box pl='1em'>
            <Image
              src='/Rooms/Storage/selfie.png'
              width={100}
              height={100}
            />
          </Box>
          <Text color='white' w='60vw' px='1rem' py='0.5rem' fontSize='md' textAlign='right'>
            On a fine evening, Princess White, the daughter of King White, invited seven legendary heroes to attend the annual interstellar meeting held within a master spaceship.
          </Text>
        </Box>

        <Box display='flex' justifyContent='space-between'  id='fadetarget3' opacity={0} transition='opacity 1s ease-in'>
          <Text color='white' w='60vw' px='1rem' py='0.5rem' fontSize='md'>
            Concerned for the safety of his daughter, King White entrusts the Knight with a crucial task. The space stone must be kept secure, yet remain in close proximity to the Princess. Thus, the Knight is commanded to place the tesseract within a safe stored in Princess White's room. In doing so, the Knight is able to protect both the Princess and the Tesseract. However, little do they know, the stage is set for an epic adventure to unfold.
          </Text>
          <Box pr='1em'>
            <Image
              src='/Rooms/Storage/selfie.png'
              width={100}
              height={100}
            />
          </Box>
        </Box>

      </Box>
    </>);
}