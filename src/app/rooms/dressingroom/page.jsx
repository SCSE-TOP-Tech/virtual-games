"use client";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
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

export default function DressingRoom() {
  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching
      try {
        // Fetch user data
        const currentUser = await fetchUser();
        setUser(currentUser);

        // Fetch room data and items data
        const fetchedRoom = await fetchRoom("dressing_room", false);
        setRoom(fetchedRoom);

        if (fetchedRoom) {
          setAvailableItems(await getAvailableItems(fetchedRoom.room_id));
          console.log("AvailableItems fetched!");
          setCollectedItems(
            await getCollectedItems(currentUser.id, fetchedRoom.room_id)
          );
          console.log("CollectedItems fetched!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching (whether successful or not)
      }
    };

    fetchData(); // Fetch data on component mount
  }, []);

  const checkVisibility = (itemName) => {
    if (availableItems && collectedItems) {
      const availState = availableItems.find(
        (item) => item.itemName === itemName
      );
      const avail = availState.stateID <= user.stateID;
      const collectedState = collectedItems.find(
        (item) => item.itemName === itemName
      );
      const collected = collectedState.collected;

      return avail && !collected;
    }
    return false;
  };

  const changeState = async (user) => {
    if (user.stateID !== 1) {
      await endTimer(user.id, user.stateID);
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

  if (loading || !user || !room || !availableItems || !collectedItems) {
    return <Loading />;
  }

  return (
    <RoomLayout>
      <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
        <Navbar />
        <Box
          display="flex"
          justifyContent="center"
          position="relative"
          width="100%"
        >
          <ItemImage item={room.background} />

          <Box position="absolute" zIndex="1">
            {/* lipstick*/}
            {checkVisibility(room.clues.lipstick.id) && (
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.lipstick.id)}
                  item={room.clues.lipstick}
                  className={styles.item}
                  width="3rem"
                  filter="auto"
                  brightness="40%"
                  right={SizeFormatter(
                    "-8.3em", //iphone se
                    "-9.3rem", //iphone xr
                    "-9rem", //iphone 12pro
                    "-9.3em", //pixel 5
                    "-8.4rem", //samsung galaxy s8+
                    "-9.3rem", //samsung galaxy s20 ultra
                    "-11.2em", //ipad air
                    "-11.2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "17rem",
                    "19rem",
                    "18rem",
                    "18.4rem",
                    "16.55rem",
                    "18.9rem",
                    "22.5rem",
                    "22.5rem"
                  )}
                />
              </Hint>
            )}
          </Box>
        </Box>
        <Box mt="2%" w="100%" background={"white"}>
          Text Component Here
        </Box>
      </Box>
    </RoomLayout>
  );
}
