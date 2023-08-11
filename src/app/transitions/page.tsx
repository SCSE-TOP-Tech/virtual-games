"use client";

import { useEffect, useState, useRef } from "react";
import fetchUserInfo from "@/resources/prisma/fetchUserInfo";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import fetchTransition from "@/resources/prisma/transitions/fetchTransition";
import { User } from "~/data/contracts";
import updateTransition from "@/resources/prisma/transitions/updateTransition";
import TransitionLayout from "@/app/rooms/layout";
import Loading from "@/app/transitions/loading";
import checkUser from "@/app/components/CheckUser";

interface image {
  alt: string;
  src: string;
  width: number;
  height: number;
}

export default function Transitions() {
  const userRef = useRef<string>("");

  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [image, setImage] = useState<image>();
  const [text, setText] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userRef.current = checkUser();
    if (userRef.current) {
      const fetchData = async () => {
        const currentUser = await fetchUserInfo(userRef.current);

        setUser(currentUser);
        /*
        switch (currentUser.transitionID) {
          case 5:
          case 8:
          case 10:
          case 15:
          case 18:
          case 22:
          case 26:
            router.push("/rooms/hallway");
            break;
        }
        */

        const trans = await fetchTransition(currentUser.transitionID);
        if (trans) {
          setText(trans.dialog);
          setImage(trans.image);
        }
      }
      fetchData();
    } 

    else router.push("/login");
  }, [router]);

  const updateTransitionStage = async () => {
    setLoading(true);
    if (user) {
      const updatedTransition = await updateTransition(userRef.current);
      
      if (updatedTransition) {
        console.log(updatedTransition.id);
        switch (updatedTransition.id) {

          // 0 - 2 Intro [1]

          // 3 - 4 Stolen tesseract [1]
          case 5:
            router.push("/rooms/princessroom");
            break;

          // 5 - 7 Investigation begins [2]
          case 8:
            router.push("/rooms/princessroom");
            break;

          // 8 - 9 Investigating Captain’s room [3]
          case 10:
            router.push("/rooms/captainroom");
            break;

          // 10 - 14 Suspicions [4]
          case 15:
            router.push("/rooms/captainroom");
            break;

          // 15 - 17 Dead doctor [5]
          case 18:
            router.push("/rooms/carmenroom");
            break;

          // 18 - 21 Confrontation (part 1) - Dead doctor [6]
          case 22:
            router.push("/rooms/storageroom");
            break;

          // 22 - 25 Confrontation (part 2) - doctor's phone [6]
          case 26:
            
            router.push("/rooms/hallway");
            break;

          default:
            setText(updatedTransition.dialog);
            setImage(updatedTransition.image);
        }
        setLoading(false);
      }
    }
  };

  const TransitionImage = () => {
    return (
      <Image
        src={image?.src ?? ""}
        alt={image?.alt ?? ""}
        height={image?.height}
        width={image?.width}
      />
    );
  };

  if (loading) return <Loading />;

  return (
    <TransitionLayout>
      <Box transition="opacity ease-in" mt={5}>

        <div>
          {text &&
            <Text
              color="black"
              backgroundColor="whiteAlpha.700"
              rounded={15}
              m={5}
              fontWeight={700}
              w="90vw"
              px="1rem"
              py="0.5rem"
              fontSize={14}
              textAlign="justify"
            >
              {text}
            </Text>
          }
          <Box
            justifyContent="center"
            display="flex"
            bg="transparent"
            my={10}
          >
            <TransitionImage />
          </Box>
          {image && (
            <Box
              display="flex"
              textColor="white"
              bg="black"
              justifyContent="center"
              m="auto"
              py={1}
              w="20rem"
              fontWeight={900}
              rounded={100}
            >
              {image?.alt}
            </Box>
          )}
          {text && <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="8rem"
            mt={10}
            mx="auto"
            onClick={updateTransitionStage}
          >
            Next
          </Button>}
        </div>

      </Box>
    </TransitionLayout>
  );
}
