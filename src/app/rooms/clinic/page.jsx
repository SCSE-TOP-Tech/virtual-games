"use client";
import { Box } from "@chakra-ui/react";

import Image from "next/image";
import styles from "./components/styles.module.css";

import background from "~/public/Rooms/Clinic/clinic.png";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import Navbar from "../../components/Navbar";
import { fetchUser } from "@/resources/prisma/fetchUser";
import Loading from "@/app/rooms/loading";
import RoomLayout from "@/app/rooms/layout";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";

export default function Clinic() {
  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);

  // Initial Load
  useEffect(() => {
    async function fetchData() {
      const currentUser = await fetchUser();

      if (currentUser) {
        setUser(currentUser);
        setRoom(fetchRoom("clinic", false));
        if (room && user) {
          setAvailableItems(await getAvailableItems(room.room_id));
          setCollectedItems(await getCollectedItems(user.userId, room.room_id));
        }
      }
    }
    fetchData();
  }, []); // To include room if necessary (will constantly refresh)

  const changeState = async () => {
    if (user.stateId !== 1) {
      const endTime = await endTimer(user.userId, user.stateId);
    }
    setUser(await updateState(user.userId));
    const startTime = await startTimer(user.userId, user.stateId);
    if (startTime !== 200) {
      console.log("Failed to Start Timer");
    }
  };

  const updateCollected = async (name) => {
    const updatedItem = await updateCollectedItems(
        user.userId,
        name,
        room.room_id
    );
    console.log(updatedItem);
  };

  return (
    <RoomLayout>
      {room ? (
        <Box w={["100%", "30em"]} h="100%">
          <Navbar />
          {/* background image */}
          <Box
            display="flex"
            justifyContent="center"
            zIndex="0"
            h="90%"
            width="100%"
          >
            {/* to export background to cloud  */}
            <Image src={background} alt="background" />

            <Box position="absolute" zIndex="1">
              {/* doctor */}
              <ItemImage
                item={room.npc.doctor}
                className={styles.item}
                width="20rem"
                left={SizeFormatter(
                  "5rem", //iphone se
                  "5rem", //iphone xr
                  "5rem", //iphone 12pro
                  "5rem", //pixel 5
                  "5rem", //samsung galaxy s8+
                  "5rem", //samsung galaxy s20 ultra
                  "5rem", //ipad air
                  "5rem" //ipad mini
                )}
                top={SizeFormatter(
                  "20rem", //iphone se
                  "20rem", //iphone xr
                  "20rem", //iphone 12pro
                  "20rem", //pixel 5
                  "20rem", //samsung galaxy s8+
                  "20rem", //samsung galaxy s20 ultra
                  "20rem", //ipad air
                  "20rem" //ipad mini
                )}
              />
            </Box>
          </Box>
          <Box
            position="absolute"
            bottom="10%"
            mt="2%"
            w="28em"
            background={"white"}
          >
            Text Component Here
          </Box>
        </Box>
      ) : (
        <Loading />
      )}
    </RoomLayout>
  );
}
