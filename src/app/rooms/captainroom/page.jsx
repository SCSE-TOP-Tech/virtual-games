"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import checkUser from "@/app/components/CheckUser";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import fetchUserInfo from "@/resources/prisma/fetchUserInfo";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useRouter } from "next/navigation";
import styles from "./components/styles.module.css";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Hint from "../../components/Hint";
import Navbar from "../../components/Navbar";
import Loading from "@/app/rooms/loading";
import RoomLayout from "@/app/rooms/layout";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";
import Inventory from "@/app/components/Inventory";

export default function CaptainRoom() {
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
          const fetchedRoom = await fetchRoom("captain", false);

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
  }, []);

  const checkVisibility = (itemName) => {
    return true
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

  if (loading || !user || !room || !availableItems || !collectedItems) {
    return <Loading />;
  }

  return (
    <RoomLayout>
      <Box w={["100%", "30em"]} h="100%" position="relative">
        <Navbar />
        {/* container for background image and items*/}
        <Box
          display="flex"
          justifyContent="center"
          zIndex="0"
          width="100%"
        >
          {/* background image */}
          <ItemImage height="80%" item={room.background} />
          {/* items container */}
          <Box position="absolute" zIndex="1">
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.music_albums.id)}
                  item={room.clues.music_albums}
                  className={checkVisibility(room.clues.music_albums.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="4rem"
                  filter="auto"
                  brightness="50%"
                  right={SizeFormatter(
                    "5rem", //iphone se
                    "5rem", //iphone xr
                    "5rem", //iphone 12pro
                    "5rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "5rem", //samsung galaxy s20 ultra
                    "7rem", //ipad air
                    "7rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "15rem", //iphone se
                    "15rem", //iphone xr
                    "15rem", //iphone 12pro
                    "15rem", //pixel 5
                    "15rem", //samsung galaxy s8+
                    "15rem", //samsung galaxy s20 ultra
                    "15rem", //ipad air
                    "15rem" //ipad mini
                  )}
                />
              </Hint>

            {/* Lipstick */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.lipstick.id)}
                  item={room.clues.lipstick}
                  className={checkVisibility(room.clues.lipstick.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="2rem"
                  filter="auto"
                  brightness="70%"
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
                  top={SizeFormatter(
                    "18.5rem", //iphone se
                    "18.5rem", //iphone xr
                    "18.5rem", //iphone 12pro
                    "18.5rem", //pixel 5
                    "18.5rem", //samsung galaxy s8+
                    "18.5rem", //samsung galaxy s20 ultra
                    "18.5rem", //ipad air
                    "18.5rem" //ipad mini
                  )}
                />
              </Hint>

            {/* Guestbook */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.guestbook.id)}
                  item={room.clues.guestbook}
                  className={checkVisibility(room.clues.guestbook.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="3rem"
                  filter="auto"
                  brightness="80%"
                  left={SizeFormatter(
                    "11.5rem", //iphone se
                    "11.5rem", //iphone xr
                    "11.5rem", //iphone 12pro
                    "11.5rem", //pixel 5
                    "11rem", //samsung galaxy s8+
                    "11.5rem", //samsung galaxy s20 ultra
                    "13rem", //ipad air
                    "13rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11rem", //iphone se
                    "11rem", //iphone xr
                    "11rem", //iphone 12pro
                    "11rem", //pixel 5
                    "11rem", //samsung galaxy s8+
                    "11rem", //samsung galaxy s20 ultra
                    "11rem", //ipad air
                    "11rem" //ipad mini
                  )}
                />
              </Hint>

            {/* Note */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.note.id)}
                  item={room.clues.note}
                  className={checkVisibility(room.clues.note.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="1.5rem"
                  right={SizeFormatter(
                    "4rem", //iphone se
                    "4.5rem", //iphone xr
                    "4rem", //iphone 12pro
                    "4rem", //pixel 5
                    "4rem", //samsung galaxy s8+
                    "4.5rem", //samsung galaxy s20 ultra
                    "6rem", //ipad air
                    "6rem" //ipad mini
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

            {/* blood letter */}
              <Hint>
                <ItemImage
                  onClick={async () => {
                    router.push("/transitions");
                    await updateCollected(room.clues.blood_letter.id);
                    await changeState(user);
                  }}
                  item={room.clues.blood_letter}
                  className={checkVisibility(room.clues.blood_letter.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="10rem"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "0rem", //iphone xr
                    "0rem", //iphone 12pro
                    "0rem", //pixel 5
                    "0rem", //samsung galaxy s8+
                    "0rem", //samsung galaxy s20 ultra
                    "0rem", //ipad air
                    "0rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "1.1rem", //iphone se
                    "1.1rem", //iphone xr
                    "1.1rem", //iphone 12pro
                    "1.1rem", //pixel 5
                    "1.1rem", //samsung galaxy s8+
                    "1.1rem", //samsung galaxy s20 ultra
                    "1.1rem", //ipad air
                    "1.1rem" //ipad mini
                  )}
                />
              </Hint>

            {/* broken watch */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.broken_watch.id)}
                  item={room.clues.broken_watch}
                  className={checkVisibility(room.clues.broken_watch.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="3.5rem"
                  left={SizeFormatter(
                    "6.5rem", //iphone se
                    "6.5rem", //iphone xr
                    "6.5rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6.5rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "7rem", //ipad air
                    "7rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "7rem", //iphone se
                    "7rem", //iphone xr
                    "7rem", //iphone 12pro
                    "7rem", //pixel 5
                    "7rem", //samsung galaxy s8+
                    "7rem", //samsung galaxy s20 ultra
                    "7rem", //ipad air
                    "7rem" //ipad mini
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
