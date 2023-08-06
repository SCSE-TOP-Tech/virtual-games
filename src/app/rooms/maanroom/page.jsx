"use client";
import { Box } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useEffect, useState } from "react";
import { fetchUser } from "@/resources/prisma/fetchUser";
import styles from "./components/styles.module.css";
import Navbar from "../../components/Navbar";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Hint from "../../components/Hint";
import RoomLayout from "@/app/rooms/layout";
import Loading from "@/app/rooms/loading";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";
import Inventory from "@/app/components/Inventory";

export default function MaanRoom() {
  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching
      try {
        // Fetch user data
        const currentUser = await fetchUser();
        setUser(currentUser);

        // Fetch room data and items data
        const fetchedRoom = await fetchRoom("maan", true);
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
    await updateCollectedItems(user.id, name, room.room_id);
    setInventory((prev) => [...prev, name]);
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
            {/* spacesword  */}
            {checkVisibility(room.dummy_objects.spacesword.id) && (
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.spacesword.id)
                  }
                  item={room.dummy_objects.spacesword}
                  className={styles.item}
                  width="2.7rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "0rem", //iphone xr
                    "0rem", //iphone 12pro
                    "0em", //pixel 5
                    "0rem", //samsung galaxy s8+
                    "0rem", //samsung galaxy s20 ultra
                    "0em", //ipad air
                    "0rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11rem",
                    "12.5rem",
                    "11.7rem",
                    "11.7rem",
                    "10.4rem",
                    "12.4rem",
                    "15rem",
                    "15.2rem"
                  )}
                />
              </Hint>
            )}
          </Box>
        </Box>
        <Inventory items={inventory} room={room} styles={styles.item} />
      </Box>
    </RoomLayout>
  );
}
