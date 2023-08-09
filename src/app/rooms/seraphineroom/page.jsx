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
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";
import Inventory from "@/app/components/Inventory";

export default function SeraphineRoom() {
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
          const fetchedRoom = await fetchRoom("seraphine", true);

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
    else router.push('/login');
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
  
  if (loading || !userRef.current || !room || !availableItems || !collectedItems) {
    return <Loading />;
  }

  return (
    <RoomLayout>
      <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
        <Navbar Phone={false}/>
        <Box
          display="flex"
          justifyContent="center"
          position="relative"
          width="100%"
        >
          {/* background image */}
          <ItemImage item={room.background} />
          {/* items container */}
          <Box position="absolute" zIndex="1">
            {/* teddybear */}
            {checkVisibility(room.dummy_objects.teddybear.id) && (
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.teddybear.id)
                  }
                  item={room.dummy_objects.teddybear}
                  className={styles.item}
                  width="3rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "-6.7rem", //iphone se
                    "-7.5rem", //iphone xr
                    "-7.5rem", //iphone 12pro
                    "-7.5rem", //pixel 5
                    "-7.2rem", //samsung galaxy s8+
                    "-7.9rem", //samsung galaxy s20 ultra
                    "-9.8rem", //ipad air
                    "-9.9rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "10.5rem",
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

            {/* Jewelry box */}
            {checkVisibility(room.dummy_objects.jewelrybox.id) && (
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.jewelrybox.id)
                  }
                  item={room.dummy_objects.jewelrybox}
                  className={styles.item}
                  width="4rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "6.4rem", //iphone se
                    "7.4rem", //iphone xr
                    "7.4rem", //iphone 12pro
                    "7.4rem", //pixel 5
                    "7.2rem", //samsung galaxy s8+
                    "7.5rem", //samsung galaxy s20 ultra
                    "9.3rem", //ipad air
                    "9.3rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "6.2rem",
                    "7.8rem",
                    "6.9rem",
                    "6.95rem",
                    "5.6rem",
                    "7.7rem",
                    "10.35rem",
                    "10.35rem"
                  )}
                />
              </Hint>
            )}

            {/* Lipstick */}
            {checkVisibility(room.clues.lipstick.id) && (
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.lipstick.id)}
                  item={room.clues.lipstick}
                  className={styles.item}
                  width="1.3rem"
                  filter="auto"
                  brightness="30%"
                  right={SizeFormatter(
                    "7.4rem", //iphone se
                    "7.4rem", //iphone xr
                    "7.4rem", //iphone 12pro
                    "7.3rem", //pixel 5
                    "7rem", //samsung galaxy s8+
                    "7.8rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12rem",
                    "14rem",
                    "12.9rem",
                    "13rem",
                    "11rem",
                    "14.5rem",
                    "19rem",
                    "19rem"
                  )}
                />
              </Hint>
            )}

            {/* camera */}
            {checkVisibility(room.dummy_objects.camera.id) && (
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.dummy_objects.camera.id)}
                  item={room.dummy_objects.camera}
                  className={styles.item}
                  width="2rem"
                  filter="auto"
                  brightness="60%"
                  right={SizeFormatter(
                    "-2rem", //iphone se
                    "-2rem", //iphone xr
                    "-2rem", //iphone 12pro
                    "-2rem", //pixel 5
                    "-1.8rem", //samsung galaxy s8+
                    "-2rem", //samsung galaxy s20 ultra
                    "-2rem", //ipad air
                    "-2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "6rem",
                    "7.7rem",
                    "6.5rem",
                    "6.5rem",
                    "5.3rem",
                    "7.5rem",
                    "10.5rem",
                    "10.5rem"
                  )}
                />
              </Hint>
            )}
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
