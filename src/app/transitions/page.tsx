"use client";

import { useEffect, useState } from "react";
import { fetchUser } from "@/resources/prisma/fetchUser";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import fetchTransition from "@/resources/prisma/transitions/fetchTransition";
import { User } from "~/data/contracts";
import { Transition } from "~/data/contracts/interfaces/transition";
import updateTransition from "@/resources/prisma/transitions/updateTransition";
import TransitionLayout from "@/app/rooms/layout";

interface image {
  alt: string;
  src: string;
  width: number;
  height: number;
}

export default function Transitions() {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [image, setImage] = useState<image>();
  const [text, setText] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const currentUser = await fetchUser();
      if (currentUser) {
        setUser(currentUser);
        const trans = await fetchTransition(currentUser.transitionID);
        if (trans) {
          setText(trans.dialog);
          setImage(trans.image);
        }
      }
    }
    fetchData();
  }, []);

  const updateTransitionStage = async () => {
    if (user) {
      const updatedTransition: Transition | undefined | null =
        await updateTransition(user.id);
      if (updatedTransition) {
        switch (updatedTransition.id) {
          // 0 - 2 Intro [1]

          // 3 princess room (stolen tessaract) [2]
          case 4:
            router.push("/rooms/princessroom");
            break;

          // 4 - 7 Split groups

          // 7 clinic (captain master key) [3]
          case 8:
            router.push("/rooms/princessroom");
            break;

          // 6 captain room (master key missing) *transition when all items collected [4]
          case 6:
            router.push("/rooms/captainroom");
            break;

          // 7 carmen room (found the key)

          // 8 carmen room (scream from storage room) [5]
          case 8:
            router.push("/rooms/carmenroom");
            break;

          // 9 storage room (dead doctor)
          case 9:
            router.push("/rooms/carmenroom");
            break;

          // 7 carmen room (found the key)
          case 10:
            router.push("/rooms/carmenroom");
            break;

          // guess
          case 11:
            router.push("/guess");
            break;
        }
        setText(updatedTransition.dialog);
        setImage(updatedTransition.image);
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

  return (
    <TransitionLayout>
      <Box transition="opacity ease-in" mt={10}>
        <Text
          color="black"
          fontWeight={700}
          w="90vw"
          px="1rem"
          py="0.5rem"
          fontSize="md"
          textAlign="justify"
        >
          {text}
        </Text>
        <Box justifyContent="center" display="flex" bg="black">
          <TransitionImage />
        </Box>
        <Button
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="50%"
          mt={10}
          mx="auto"
          rightIcon={<ChevronRightIcon />}
          onClick={updateTransitionStage}
        >
          Next
        </Button>
      </Box>
    </TransitionLayout>
  );
}
