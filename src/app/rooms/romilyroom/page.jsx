"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useEffect, useState, useRef } from "react";
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

export default function RomilyRoom() {
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
          const fetchedRoom = await fetchRoom("romily", true);

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
          <ItemImage item={room.background} zIndex="0" />

          {/* items */}
          <Box position="absolute" zIndex="1">
            {/* Basketball */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.basketball.id)
                  }
                  item={room.dummy_objects.basketball}
                  className={checkVisibility(room.dummy_objects.basketball.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="3rem"
                  filter="auto"
                  brightness="60%"
                  right={SizeFormatter(
                    "7rem", //iphone se
                    "8rem", //iphone xr
                    "7rem", //iphone 12pro
                    "7.5rem", //pixel 5
                    "7rem", //samsung galaxy s8+
                    "8rem", //samsung galaxy s20 ultra
                    "10rem", //ipad air
                    "10rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "20rem",
                    "22.5rem",
                    "21rem",
                    "21rem",
                    "19rem",
                    "22.5rem",
                    "26.5rem",
                    "26.5rem"
                  )}
                />
              </Hint>

            {/* Punching Bag */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.punchingbag.id)
                  }
                  item={room.dummy_objects.punchingbag}
                  className={checkVisibility(room.dummy_objects.punchingbag.id) ? `${styles.item}` : `${styles.hidden}`}
                  width={SizeFormatter(
                    "6.5rem", //iphone se
                    "6.5rem", //iphone xr
                    "6.5rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6.5rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  filter="auto"
                  brightness="70%"
                  left={SizeFormatter(
                    "5rem", //iphone se
                    "6rem", //iphone xr
                    "5.5rem", //iphone 12pro
                    "5.5rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "6rem", //samsung galaxy s20 ultra
                    "6rem", //ipad air
                    "6rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "9rem", //iphone se
                    "11.5rem", //iphone xr
                    "10rem", //iphone 12pro
                    "10rem", //pixel 5
                    "8rem", //samsung galaxy s8+
                    "11rem", //samsung galaxy s20 ultra
                    "12rem", //ipad air
                    "12rem" //ipad mini
                  )}
                />
              </Hint>

            {/* Towel */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.dummy_objects.towel.id)}
                  item={room.dummy_objects.towel}
                  className={checkVisibility(room.dummy_objects.towel.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="4rem"
                  filter="auto"
                  brightness="80%"
                  left={SizeFormatter(
                    "1rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "1rem", //ipad air
                    "1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "6rem", //iphone se
                    "8rem", //iphone xr
                    "7rem", //iphone 12pro
                    "7rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "8rem", //samsung galaxy s20 ultra
                    "8.6rem", //ipad air
                    "8.6rem" //ipad mini
                  )}
                />
              </Hint>

            {/* Clothes */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.dummy_objects.clothes.id)}
                  item={room.dummy_objects.clothes}
                  className={checkVisibility(room.dummy_objects.clothes.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="8rem"
                  filter="auto"
                  brightness="80%"
                  right={SizeFormatter(
                    "1rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "1rem", //ipad air
                    "1rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "2rem", //iphone se
                    "0rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "2.5rem", //samsung galaxy s8+
                    "0rem", //samsung galaxy s20 ultra
                    "1rem", //ipad mini
                    "1rem"
                  )}
                />
              </Hint>

            {/* Dumbbell */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.dumbbell.id)
                  }
                  item={room.dummy_objects.dumbbell}
                  className={checkVisibility(room.dummy_objects.dumbbell.id) ? `${styles.item}` : `${styles.hidden}`}
                  filter="auto"
                  brightness="70%"
                  width={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2rem", //iphone 12pro
                    "2rem", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "2rem", //samsung galaxy s20 ultra
                    "3rem", //ipad air
                    "3rem" //ipad mini
                  )}
                  right={SizeFormatter(
                    "6rem", //iphone se
                    "7rem", //iphone xr
                    "6.5rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "7rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "7.5rem", //iphone se
                    "5.9rem", //iphone xr
                    "6.9rem", //iphone 12pro
                    "6.8rem", //pixel 5
                    "8rem", //samsung galaxy s8+
                    "6rem", //samsung galaxy s20 ultra
                    "8.2rem", //ipad air
                    "8.2rem" //ipad mini
                  )}
                />
              </Hint>

              <Hint>
                <ItemImage
                  item={room.clues.laptop}
                  filter="auto"
                  brightness="70%"
                  className={checkVisibility(room.clues.laptop.id) ? `${styles.item}` : `${styles.hidden}`}
                  width={SizeFormatter(
                    "5rem", //iphone se
                    "5.8rem", //iphone xr
                    "6.2rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "7.4rem", //ipad air
                    "7.4rem" //ipad mini
                  )}
                  left={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2.5rem", //iphone 12pro
                    "2.5rem", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "1.7rem", //samsung galaxy s20 ultra
                    "2rem", //ipad air
                    "2rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "4.2rem", //iphone se
                    "2.7rem", //iphone xr
                    "6rem", //iphone 12pro
                    "4rem", //pixel 5
                    "5.8rem", //samsung galaxy s8+
                    "3.3rem", //samsung galaxy s20 ultra
                    "4.6rem", //ipad air
                    "4.6rem" //ipad mini
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
