"use client";

import { useEffect, useState } from "react";
import { fetchUser } from "@/resources/prisma/fetchUser";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Transitions() {
  let state = 0;
  const [user, setUser] = useState();
  const [image, setImage] = useState("");
  const [text, setText] = useState();

  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      if (user) {
        setUser(user);
      }
    }
    fetchData();
    setText(storyline(state).text);
    setImage(storyline(state).image);
  }, [state]);

  const updateTransitionState = () => {
    state++;
    console.log(state);
  };

  const storyline = (state) => {
    switch (state) {
      case 0:
        return {
          text:
            "In a distant corner of the universe lies the Black Eye Galaxy, ruled\n" +
            "          by the almighty King White. This kingdom holds a precious artifact\n" +
            "          known as the space stone which has incredible value and is carefully\n" +
            "          stored within the Tesseract. The responsibility of protecting this\n" +
            "          invaluable stone falls upon the Knight of Interstellar, a loyal\n" +
            "          guardian in service to King White.",
          image: (
            <Image
              src="/intro/knight.jpg"
              alt="knight"
              width={200}
              height={200}
            />
          ),
        };
      case 1:
        return {
          text:
            "On a fine evening, Princess White, the daughter of King White, invited\n" +
            "          seven legendary heroes to attend the annual interstellar meeting held\n" +
            "          within a master spaceship.",
          image: <Image src="/intro/princess.jpg" width={100} height={100} />,
        };
      case 2:
        return {
          text:
            "Concerned for the safety of his daughter, King White entrusts the\n" +
            "          Knight with a crucial task. The space stone must be kept secure, yet\n" +
            "          remain in close proximity to the Princess. Thus, the Knight is\n" +
            "          commanded to place the tesseract within a safe stored in Princess\n" +
            "          White's room. In doing so, the Knight is able to protect both the\n" +
            "          Princess and the Tesseract. However, little do they know, the stage is\n" +
            "          set for an epic adventure to unfold.",
          image: <Image src="/intro/stone.jpg" width={300} height={300} />,
        };
    }
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
          {image}
        </Box>
        <Button
          display="flex"
          rightIcon={<ChevronRightIcon onClick={updateTransitionState} />}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
