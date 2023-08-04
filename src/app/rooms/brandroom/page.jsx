"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";
import { fetchUser } from "@/resources/prisma/fetchUser";
import Loading from "@/app/rooms/loading";
import RoomLayout from "@/app/rooms/layout";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";

export default function BrandRoom() {
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
        setRoom(fetchRoom("brand", true));
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
        <div>
          <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
            <Navbar />
            <Box
              display="flex"
              justifyContent="center"
              position="relative"
              width="100%"
            >
              {/* background image */}
              <ItemImage item={room.background} />
              <Box position="absolute" zIndex="1">
                {/* temp custom image to be used */}
                {/* galaxy phone */}
                <Hint>
                  <ItemImage
                    onClick={() => updateCollected(room.clues.galaxy_phone.id)}
                    item={room.clues.galaxy_phone}
                    className={styles.item}
                    width="2rem"
                    left={SizeFormatter(
                      "5rem", //iphone se
                      "1rem", //iphone xr
                      "1rem", //iphone 12pro
                      "1rem", //pixel 5
                      "1rem", //samsung galaxy s8+
                      "1rem", //samsung galaxy s20 ultra
                      "1rem", //ipad air
                      "1rem" //ipad mini
                    )}
                    bottom={SizeFormatter(
                      "10rem", //iphone se
                      "1rem", //iphone xr
                      "1rem", //iphone 12pro
                      "1rem", //pixel 5
                      "1rem", //samsung galaxy s8+
                      "1rem", //samsung galaxy s20 ultra
                      "1rem", //ipad air
                      "1rem" //ipad mini
                    )}
                  />
                </Hint>
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
        </div>
      ) : (
        <Loading />
      )}
    </RoomLayout>
  );
}
