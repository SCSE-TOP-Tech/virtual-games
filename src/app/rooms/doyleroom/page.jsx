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

export default function DoyleRoom() {
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
          const fetchedRoom = await fetchRoom("doyle", true);

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
    //console.log(updatedItem);
    setCollectedItems((prev) => [...prev, {'itemName':name, 'collected':true}]);
  };

  if (loading || !userRef.current || !room || !availableItems || !collectedItems) {
    return <Loading />;
  }

  return (
    <RoomLayout>
      <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
        <Navbar Phone={false}/>

        <Box display="flex" justifyContent="center" width="100%">
          <ItemImage item={room.background} />
          <Box position="absolute" zIndex="1">
            {/* album */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.music_albums.id)}
                  item={room.clues.music_albums}
                  className={checkVisibility(room.clues.music_albums.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="3.5rem"
                  right={SizeFormatter(
                    "4.5rem", //iphone se
                    "4.5rem", //iphone xr
                    "4.5rem", //iphone 12pro
                    "4.5rem", //pixel 5
                    "4.5rem", //samsung galaxy s8+
                    "4.5rem", //samsung galaxy s20 ultra
                    "6.5rem", //ipad air
                    "6.5rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12rem", //iphone se
                    "14rem", //iphone xr
                    "13rem", //iphone 12pro
                    "13rem", //pixel 5
                    "11.5rem", //samsung galaxy s8+
                    "13.5rem", //samsung galaxy s20 ultra
                    "16.5rem", //ipad air
                    "16.5rem" //ipad mini
                  )}
                />
              </Hint>

            {/*luggage */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.dummy_objects.luggage.id)}
                  item={room.dummy_objects.luggage}
                  className={checkVisibility(room.dummy_objects.luggage.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="4rem"
                  filter="auto"
                  brightness="70%"
                  right={SizeFormatter(
                    "6rem", //iphone se
                    "7rem", //iphone xr
                    "6rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "8rem", //ipad air
                    "8rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12.5rem", //iphone se
                    "14rem", //iphone xr
                    "12.5rem", //iphone 12pro
                    "12.5rem", //pixel 5
                    "11.5rem", //samsung galaxy s8+
                    "14rem", //samsung galaxy s20 ultra
                    "18rem", //ipad air
                    "18rem" //ipad mini
                  )}
                />
              </Hint>

            {/* id card */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.spaceID_card.id)}
                  item={room.clues.spaceID_card}
                  className={checkVisibility(room.clues.spaceID_card.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="5rem"
                  left={SizeFormatter(
                    "3rem", //iphone se
                    "3.5rem", //iphone xr
                    "3rem", //iphone 12pro
                    "3.5rem", //pixel 5
                    "3rem", //samsung galaxy s8+
                    "3.5rem", //samsung galaxy s20 ultra
                    "5rem", //ipad air
                    "5rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11rem", //iphone se
                    "13.5rem", //iphone xr
                    "12rem", //iphone 12pro
                    "12rem", //pixel 5
                    "10rem", //samsung galaxy s8+
                    "13rem", //samsung galaxy s20 ultra
                    "17rem", //ipad air
                    "17rem" //ipad mini
                  )}
                />
              </Hint>

            {/* clothes */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.dummy_objects.clothes.id)}
                  item={room.dummy_objects.clothes}
                  className={checkVisibility(room.dummy_objects.clothes.id) ? `${styles.item}` : `${styles.hidden}`}
                  width={SizeFormatter(
                    "4rem", //iphone se
                    "4rem", //iphone xr
                    "4rem", //iphone 12pro
                    "4rem", //pixel 5
                    "4rem", //samsung galaxy s8+
                    "4rem", //samsung galaxy s20 ultra
                    "5.5rem", //ipad air
                    "5.5rem" //ipad mini
                  )}
                  filter="auto"
                  brightness="80%"
                  left={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2rem", //iphone 12pro
                    "2rem", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "2rem", //samsung galaxy s20 ultra
                    "2rem", //ipad air
                    "2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "0", //iphone se
                    "1.5rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "0", //samsung galaxy s8+
                    "1.5rem", //samsung galaxy s20 ultra
                    "3.5rem", //ipad air
                    "3.5rem" //ipad mini
                  )}
                />
              </Hint>

            {/* bloodstained small towel  */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.clues.bloodstained_towel.id)
                  }
                  item={room.clues.bloodstained_towel}
                  className={checkVisibility(room.clues.bloodstained_towel.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="2rem"
                  filter="auto"
                  brightness="75%"
                  left={SizeFormatter(
                    "9rem", //iphone se
                    "9rem", //iphone xr
                    "9rem", //iphone 12pro
                    "9rem", //pixel 5
                    "9rem", //samsung galaxy s8+
                    "9rem", //samsung galaxy s20 ultra
                    "11rem", //ipad air
                    "11rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "6rem", //iphone se
                    "8rem", //iphone xr
                    "7rem", //iphone 12pro
                    "7rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "8rem", //samsung galaxy s20 ultra
                    "11rem", //ipad air
                    "11rem" //ipad mini
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
