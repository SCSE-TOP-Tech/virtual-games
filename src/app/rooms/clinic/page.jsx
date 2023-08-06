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
import { useRouter } from "next/navigation";
import Inventory from "@/app/components/Inventory";

export default function Clinic() {
  const router = useRouter();
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
        const fetchedRoom = await fetchRoom("clinic", false);
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

  if (loading || !user || !room || !availableItems || !collectedItems) {
    return <Loading />;
  }

  return (
    <RoomLayout>
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
              onClick={() => {
                changeState();
                router.push("/transitions");
              }}
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
        <Inventory items={inventory} room={room} styles={styles.item} />
      </Box>
    </RoomLayout>
  );
}
