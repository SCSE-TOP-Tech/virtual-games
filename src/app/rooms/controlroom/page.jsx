"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import checkUser from "@/app/components/CheckUser";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import fetchUserInfo from "@/resources/prisma/fetchUserInfo";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";
import RoomLayout from "@/app/rooms/layout";
import Loading from "@/app/rooms/loading";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import Inventory from "@/app/components/Inventory";

export default function ControlRoom() {
  const router = useRouter();

  // userRef stores the user ID that has been login.
  const userRef = useRef("");

  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    userRef.current = checkUser();
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching
      try {
        // Fetch room data and items data
        const fetchedRoom = await fetchRoom("control_room", false);
        setRoom(fetchedRoom);

        if (fetchedRoom) {
          setUser(await fetchUserInfo(userRef.current));
          
          setAvailableItems(await getAvailableItems(fetchedRoom.room_id));
          console.log("AvailableItems fetched!");
          setCollectedItems(
            await getCollectedItems(userRef.current, fetchedRoom.room_id)
          );
          console.log("CollectedItems fetched!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching (whether successful or not)
      }
    };

    if (userRef.current) fetchData(); //Fetch data on component mount
    else router.push("/login");
  }, [router]);

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
      await endTimer(userRef.current, user.stateID);
    }
    setUser(await updateState(userRef.current));
    const startTime = await startTimer(userRef.current, user.stateID);
    if (startTime !== 200) {
      console.log("Failed to Start Timer");
    }
  };

  const updateCollected = async (name) => {
    const updatedItem = await updateCollectedItems(userRef.current, name, room.room_id);
    console.log(updatedItem);
    setInventory((prev) => [...prev, name]);
  };

  if (
    loading ||
    !userRef.current ||
    !room ||
    !availableItems ||
    !collectedItems
  ) {
    return <Loading />;
  }

  return (
    <RoomLayout>
      <Box w={["100%", "30em"]} h="100%" position="relative">
        <Navbar Phone={false}/>
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
        <Inventory items={inventory} room={room} styles={styles.item} />
      </Box>
    </RoomLayout>
  );
}
