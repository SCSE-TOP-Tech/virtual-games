"use client";
import styles from "./components/styles.module.css";
import background from "~/public/Rooms/Clinic/clinic.png";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import Navbar from "../../components/Navbar";
import Loading from "@/app/rooms/loading";
import RoomLayout from "@/app/rooms/layout";
import Loading from "@/app/rooms/loading";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import { useRouter } from "next/navigation";
import Inventory from "@/app/components/Inventory";

export default function Clinic() {
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
        const fetchedRoom = await fetchRoom("clinic", false);
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
      console.log(availableItems)
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
      <Box w={["100%", "30em"]} h="100%">
        <Navbar Phone={false}/>
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
            {checkVisibility(room.npc.doctor.id) && (
              <ItemImage
                onClick={async () => {
                  router.push("/transitions");
                  await updateCollected(room.npc.doctor.id);
                  await changeState(user);
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
              />)}
          </Box>
        </Box>
        <Inventory items={inventory} room={room} styles={styles.item} />
      </Box>
    </RoomLayout>
  );
}