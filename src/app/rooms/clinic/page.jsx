"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useRouter } from "next/navigation";
import checkUser from "@/app/components/CheckUser";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import fetchUserInfo from "@/resources/prisma/fetchUserInfo";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";
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
import Inventory from "@/app/components/Inventory";

export default function Clinic() {
  const router = useRouter();
  const fetchRef = useRef(false);
  // userRef stores the user ID that has been login.
  const userRef = useRef("");

  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userRef.current = checkUser();
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching
      try {
        if(!fetchRef.current){
          // Fetch room data and items data
          fetchRef.current = true;
          const fetchedRoom = await fetchRoom("clinic", false);

          if (fetchedRoom) {
            setRoom(fetchedRoom);
            setUser(await fetchUserInfo(userRef.current));

            setAvailableItems(await getAvailableItems(fetchedRoom.room_id));
            console.log("AvailableItems fetched!");
            setCollectedItems(
              await getCollectedItems(userRef.current, fetchedRoom.room_id)
            );
            console.log("CollectedItems fetched!");
          }
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
    try{
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
    } catch (error) {
      console.log(itemName, "not exists in the current state");
      return false;
    }
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
    setCollectedItems((prev) => [...prev, {'itemName':name, 'collected':true}]);
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
        <Box
          display="flex"
          justifyContent="center"
          zIndex="0"
          width="100%"
        >

          {/* to export background to cloud
          background image */}
          <ItemImage item={room.background} />

          <Box position="absolute" zIndex="1">
            {/* doctor */}
            <Hint>
              <ItemImage
                onClick={async () => {
                  router.push("/transitions");
                  await updateCollected(room.npc.doctor.id);
                  await changeState(user); 
                }}
                item={room.npc.doctor}
                className={checkVisibility(room.npc.doctor.id) ? `${styles.item}` : `${styles.hidden}`}
                width="8rem"
                left={SizeFormatter(
                  "3rem", //iphone se
                  "3rem", //iphone xr
                  "3rem", //iphone 12pro
                  "3rem", //pixel 5
                  "3rem", //samsung galaxy s8+
                  "3rem", //samsung galaxy s20 ultra
                  "3rem", //ipad air
                  "3rem" //ipad mini
                )}
                top={SizeFormatter(
                  "13rem", //iphone se
                  "13rem", //iphone xr
                  "13rem", //iphone 12pro
                  "13rem", //pixel 5
                  "13rem", //samsung galaxy s8+
                  "13rem", //samsung galaxy s20 ultra
                  "13rem", //ipad air
                  "13rem" //ipad mini
                )}
              />
            </Hint>
          </Box>
        </Box>
        <Inventory 
        items={
          collectedItems.filter((i) => i.collected === true)
        } 
        room={room} styles={styles.item} />
      </Box>
    </RoomLayout>
  );
}