"use client";
import { Box } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import checkUser from "@/app/components/CheckUser";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import fetchUserInfo from "@/resources/prisma/fetchUserInfo";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";
import Loading from "@/app/rooms/loading";
import RoomLayout from "@/app/rooms/layout";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import Inventory from "@/app/components/Inventory";

export default function Kitchen() {
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
          const fetchedRoom = await fetchRoom("kitchen", false);

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
            {/* blood stained knife (temp viewing) */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.knife.id)}
                  item={room.clues.knife}
                  className={checkVisibility(room.clues.knife.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="3.5rem"
                  right={SizeFormatter(
                    "1rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1em", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "2rem", //samsung galaxy s20 ultra
                    "3em", //ipad air
                    "3rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12rem",
                    "13rem",
                    "12.5rem",
                    "13rem",
                    "12rem",
                    "13.5rem",
                    "16rem",
                    "16rem"
                  )}
                />
              </Hint>

              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.meat.id)}
                  item={room.clues.meat}
                  width="4rem"
                  className={checkVisibility(room.clues.meat.id) ? `${styles.item}` : `${styles.hidden}`}
                  filter="auto"
                  brightness="70%"
                  left={SizeFormatter(
                    "5rem", //iphone se
                    "5rem", //iphone xr
                    "5rem", //iphone 12pro
                    "5em", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "5rem", //samsung galaxy s20 ultra
                    "5em", //ipad air
                    "5rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "15rem", //iphone se
                    "16rem", //iphone xr
                    "16rem", //iphone 12pro
                    "15em", //pixel 5
                    "15rem", //samsung galaxy s8+
                    "17rem", //samsung galaxy s20 ultra
                    "20rem", //ipad air
                    "20rem" //ipad mini
                  )}
                />
              </Hint>

              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.apron.id)}
                  item={room.clues.apron}
                  width="8rem"
                  className={checkVisibility(room.clues.apron.id) ? `${styles.item}` : `${styles.hidden}`}
                  left={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2rem", //iphone 12pro
                    "2em", //pixel 5
                    "0rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "2em", //ipad air
                    "2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "13rem", //iphone se
                    "14rem", //iphone xr
                    "14rem", //iphone 12pro
                    "14em", //pixel 5
                    "12rem", //samsung galaxy s8+
                    "14.5rem", //samsung galaxy s20 ultra
                    "19rem", //ipad air
                    "19rem" //ipad mini
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
