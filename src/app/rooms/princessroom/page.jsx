"use client";
import styles from "./components/styles.module.css";
import { Box, IconButton } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
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

export default function PrincessRoom() {
  const router = useRouter();
  const fetchRef = useRef(false);
  // userRef stores the user ID that has been login.
  const userRef = useRef("");

  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inspect, showMap] = useState(false);
  
  useEffect(() => {
    userRef.current = checkUser();

    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching
      try {
        if(!fetchRef.current){
          // Fetch room data and items data
          fetchRef.current = true;
          const fetchedRoom = await fetchRoom("princess_white", true);

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
    //console.log(updatedItem);
    setCollectedItems((prev) => [...prev, {'itemName':name, 'collected':true}]);
  };
  
  if (loading || !userRef.current || !room || !availableItems || !collectedItems) {
    return <Loading />;
  }

  const toggleMap = () => {
    showMap(!inspect);
  };

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

          {inspect && (
            <Box
              position="absolute"
              top="1rem"
              right="5rem"
              width="15rem"
              display="flex"
            >
              <IconButton
                position="relative"
                aria-label="Call App"
                fontSize="2rem"
                icon={<MdClose />}
                onClick={toggleMap}
                borderRadius="50%"
                marginRight="0.5rem"
              />

            <Hint>
              <ItemImage
                onClick={() => updateCollected(room.clues.map.id)}
                item={room.clues.map}
                style={{
                  position: "relative",
                  right: "0rem",
                  top: "0rem",
                  width: "13rem",
                  margin: "0",
                  zIndex: "10",
                }}
                className={styles.item}
              />
            </Hint>
            </Box>
          )}

          <Box position="absolute" zIndex="1">
            {/* safe */}
              <Hint>
                <ItemImage
                  onClick={async () => {
                    router.push("/transitions");
                    await updateCollected(room.clues.safe.id);
                    await changeState(user);
                  }}
                  item={room.clues.safe}
                  className={checkVisibility(room.clues.safe.id) ? `${styles.item}` : `${styles.hidden}`}
                  width={[
                    "6.1rem",
                    "6.1rem",
                    "6.1rem",
                    "6.1rem",
                    "6.1rem",
                    "6.1rem",
                    "7.1rem",
                    "7.1rem",
                  ]}
                  filter="auto"
                  brightness="70%"
                  right={SizeFormatter(
                    "6.6rem", //iphone se
                    "7.5rem", //iphone xr
                    "7.3rem", //iphone 12pro
                    "7.3rem", //pixel 5
                    "6.5rem", //samsung galaxy s8+
                    "7.9rem", //samsung galaxy s20 ultra
                    "9.1rem", //ipad air
                    "9.1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "14.2rem",
                    "16rem",
                    "14.9rem",
                    "15rem",
                    "13.5rem",
                    "15.9rem",
                    "18.9rem",
                    "18.9rem"
                  )}
                />
              </Hint>

            {/* door */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.dummy_objects.door.id)}
                  item={room.dummy_objects.door}
                  className={checkVisibility(room.dummy_objects.door.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="1.4rem"
                  height="13rem"
                  filter="auto"
                  brightness="70%"
                  left={SizeFormatter(
                    "12.4rem", //iphone se
                    "13.6rem", //iphone xr
                    "12.85rem", //iphone 12pro
                    "12.9rem", //pixel 5
                    "11.9rem", //samsung galaxy s8+
                    "13.5rem", //samsung galaxy s20 ultra
                    "16.1rem", //ipad air
                    "16.1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "0rem",
                    "2rem",
                    "1rem",
                    "1rem",
                    "0rem",
                    "2rem",
                    "4.9rem",
                    "4.9rem"
                  )}
                />
              </Hint>

            {/* map */}
              <Hint>
                <ItemImage
                  onClick={() => {
                    toggleMap();
                    updateCollected(room.clues.map.id);
                  }}
                  item={room.clues.map}
                  className={checkVisibility(room.clues.map.id) ? `${styles.item}` : `${styles.hidden}`}
                  width={[
                    "1.6rem",
                    "1.6rem",
                    "1.6rem",
                    "1.6rem",
                    "1.6rem",
                    "1.6rem",
                    "2.15rem",
                    "2.15rem",
                  ]}
                  filter="auto"
                  brightness="90%"
                  right={SizeFormatter(
                    "5rem", //iphone se
                    "5.4rem", //iphone xr
                    "5.4rem", //iphone 12pro
                    "5.3rem", //pixel 5
                    "4.5rem", //samsung galaxy s8+
                    "5.5rem", //samsung galaxy s20 ultra
                    "6.8rem", //ipad air
                    "6.8rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "6.2rem",
                    "4.75rem",
                    "5.6rem",
                    "5.5rem",
                    "6.8rem",
                    "4.8rem",
                    "3.25rem",
                    "3.25rem"
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
