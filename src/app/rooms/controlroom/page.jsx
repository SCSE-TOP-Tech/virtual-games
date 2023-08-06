"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import Navbar from "../../components/Navbar";
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

export default function ControlRoom() {
  const router = useRouter();
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
        const fetchedRoom = await fetchRoom("control_room", false);
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
      <Box w={["100%", "30em"]} h="100%" position="relative">
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
            {/* security computer (temp viewing) */}
            {checkVisibility(room.dummy_objects.computer.id) && (
              <ItemImage
                onClick={async () => {
                  router.push("/transitions");
                  await updateCollected(room.dummy_objects.computer.id);
                  await changeState(user);
                }}
                item={room.dummy_objects.computer}
                className={styles.item}
                width={SizeFormatter(
                  "3rem", //iphone se
                  "3rem", //iphone xr
                  "3rem", //iphone 12pro
                  "3rem", //pixel 5
                  "3rem", //samsung galaxy s8+
                  "3rem", //samsung galaxy s20 ultra
                  "3.4rem", //ipad air
                  "3.4rem" //ipad mini
                )}
                filter="auto"
                brightness="100%"
                left={SizeFormatter(
                  "0.13rem", //iphone se
                  "0.13rem", //iphone xr
                  "0.13rem", //iphone 12pro
                  "0.13rem", //pixel 5
                  "0.13rem", //samsung galaxy s8+
                  "0.13rem", //samsung galaxy s20 ultra
                  "0.13rem", //ipad air
                  "0.13rem" //ipad mini
                )}
                top={SizeFormatter(
                  "11.5rem",
                  "13rem",
                  "12rem",
                  "12.3rem",
                  "11.3rem",
                  "13rem",
                  "15.1rem",
                  "15.1rem"
                )}
              />
            )}
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
    </RoomLayout>
  );
}
