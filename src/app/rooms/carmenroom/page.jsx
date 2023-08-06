"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";
import { fetchUser } from "@/resources/prisma/fetchUser";
import RoomLayout from "@/app/rooms/layout";
import Loading from "@/app/rooms/loading";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";
import { useRouter } from "next/navigation";

export default async function CarmenRoom() {
  const router = useRouter();
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
        setRoom(fetchRoom("carmen", true));
        if (room && user) {
          setAvailableItems(await getAvailableItems(room.room_id));
          setCollectedItems(await getCollectedItems(user.userId, room.room_id));
        }
      }
    }
    fetchData();
  }, []); // To include room if necessary (will constantly refresh)
  const changeState = async (user) => {
    if (user.stateID !== 1) {
      const endTime = await endTimer(user.id, user.stateID);
    }
    setUser(await updateState(user.id));
    const startTime = await startTimer(user.id, user.stateID);
    if (startTime !== 200) {
      console.log("Failed to Start Timer");
    }
  };

  const updateCollected = async (name) => {
    const updatedItem = await updateCollectedItems(user.id, name, room.room_id);
    console.log(updatedItem);
  };
  return (
    <RoomLayout>
      {room ? (
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
            {/* items */}
            <Box position="absolute" zIndex="1">
              {/* mail */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.mail.id)}
                  item={room.clues.mail}
                  className={styles.item}
                  width="5.9rem"
                  filter="auto"
                  brightness="76%"
                  right={SizeFormatter(
                    "8rem", //iphone se
                    "9rem", //iphone xr
                    "8.3rem", //iphone 12pro
                    "8.3rem", //pixel 5
                    "7.8rem", //samsung galaxy s8+
                    "8.7rem", //samsung galaxy s20 ultra
                    "10.2rem", //ipad air
                    "10.2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "8.8rem",
                    "10.3rem",
                    "9.3rem",
                    "9.6rem",
                    "8.3rem",
                    "10.2rem",
                    "12.7rem",
                    "12.7rem"
                  )}
                />
              </Hint>

              {/* master key */}
              <Hint>
                <ItemImage
                  onClick={async () => {
                    router.push("/transitions");
                    await updateCollected(room.clues.master_key.id);
                    await changeState(user);
                  }}
                  item={room.clues.master_key}
                  className={styles.item}
                  width="2rem"
                  filter="auto"
                  brightness="76%"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1.3rem", //samsung galaxy s20 ultra
                    "1.3rem", //ipad air
                    "1.4rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "13rem",
                    "15.7rem",
                    "14rem",
                    "14.4rem",
                    "12.3rem",
                    "15.5rem",
                    "19.5rem",
                    "19.5rem"
                  )}
                />
              </Hint>

              {/* clothspin */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.clothespin.id)
                  }
                  item={room.dummy_objects.clothespin}
                  className={styles.item}
                  width="1.5rem"
                  filter="auto"
                  brightness="20%"
                  left={SizeFormatter(
                    "11rem", //iphone se
                    "12.2rem", //iphone xr
                    "12rem", //iphone 12pro
                    "12rem", //pixel 5
                    "11rem", //samsung galaxy s8+
                    "12rem", //samsung galaxy s20 ultra
                    "14rem", //ipad air
                    "14rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12.7rem",
                    "15rem",
                    "13.6rem",
                    "14rem",
                    "11.8rem",
                    "15rem",
                    "19rem",
                    "19rem"
                  )}
                />
              </Hint>
            </Box>
          </Box>
          <Box mt="2%" w="100%" background={"white"}>
            Text Component Here
          </Box>
        </Box>
      ) : (
        <Loading />
      )}
    </RoomLayout>
  );
}
