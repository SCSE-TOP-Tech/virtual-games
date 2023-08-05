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
          case 3:
          case 4:
          case 5:
          case 6:
            router.push("/rooms/hallway");
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
    <Box
      bgColor="black"
      w="100%"
      h={800}
      justifyContent="center"
      display="flex"
    >
      <Box transition="opacity ease-in">
        <Text color="white" w="60vw" px="1rem" py="0.5rem" fontSize="md">
          {text}
        </Text>
        <Box justifyContent="center" display="flex" bg="black">
          <TransitionImage />
        </Box>
        <Button
          display="flex"
          rightIcon={<ChevronRightIcon />}
          onClick={updateTransitionStage}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
