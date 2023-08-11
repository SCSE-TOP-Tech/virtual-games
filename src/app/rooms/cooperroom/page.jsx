"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import checkUser from "@/app/components/CheckUser";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import fetchUserInfo from "@/resources/prisma/fetchUserInfo";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
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

export default function CooperPage() {
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
          const fetchedRoom = await fetchRoom("cooper", true);

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
    const updatedItem = await updateCollectedItems(user.id, name, room.room_id);
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
        <Box
          display="flex"
          justifyContent="center"
          position="relative"
          width="100%"
        >
          {/* background image */}
          {/* can use ItemImage for background image as well  */}
          <ItemImage item={room.background} />

          {/* items */}
          <Box position="absolute" zIndex="1">
            {/* luggage  */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.dummy_objects.luggage.id)}
                  item={room.dummy_objects.luggage}
                  //chakra props
                  className={checkVisibility(room.dummy_objects.luggage.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="6.5rem"
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
                    "16rem",
                    "17.5rem",
                    "16rem",
                    "16rem",
                    "15rem",
                    "17.5rem",
                    "21rem",
                    "21rem"
                  )}
                />
              </Hint>

            {/* newspaper  */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.newspaper.id)
                  }
                  item={room.dummy_objects.newspaper}
                  //chakra props
                  className={checkVisibility(room.dummy_objects.newspaper.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="3.5rem"
                  right={SizeFormatter(
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
                    "4.5rem", //iphone se
                    "5.5rem", //iphone xr
                    "5rem", //iphone 12pro
                    "5.5rem", //pixel 5
                    "4.5rem", //samsung galaxy s8+
                    "6rem", //samsung galaxy s20 ultra
                    "8rem", //ipad air
                    "8rem" //ipad mini
                  )}
                />
              </Hint>

            {/* id  */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.spaceID_card.id)
                  }
                  item={room.dummy_objects.spaceID_card}
                  //chakra props
                  filter="auto"
                  brightness="75%"
                  className={checkVisibility(room.dummy_objects.spaceID_card.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="5.5rem"
                  right={SizeFormatter(
                    "4rem", //iphone se
                    "4rem", //iphone xr
                    "4rem", //iphone 12pro
                    "4rem", //pixel 5
                    "4rem", //samsung galaxy s8+
                    "4rem", //samsung galaxy s20 ultra
                    "4rem", //ipad air
                    "4rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12rem",
                    "13rem",
                    "13rem",
                    "13rem",
                    "11rem",
                    "13rem",
                    "18rem",
                    "18rem"
                  )}
                />
              </Hint>

            {/* coffeemachine  */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.coffee_machine.id)
                  }
                  item={room.dummy_objects.coffee_machine}
                  //chakra props
                  className={checkVisibility(room.dummy_objects.coffee_machine.id) ? `${styles.item}` : `${styles.hidden}`}
                  width="3.5rem" //use SizeFormatter if item should be different for different devices
                  left={SizeFormatter(
                    "9.5rem", //iphone se
                    "10.5rem", //iphone xr
                    "10rem", //iphone 12pro
                    "10.25rem", //pixel 5
                    "9.5rem", //samsung galaxy s8+
                    "10.25rem", //samsung galaxy s20 ultra
                    "12rem", //ipad air
                    "12rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "3.5rem", //iphone se
                    "5rem", //iphone xr
                    "4.25rem", //iphone 12pro
                    "4rem", //pixel 5
                    "3rem", //samsung galaxy s8+
                    "5rem", //samsung galaxy s20 ultra
                    "7.5rem", //ipad air
                    "7.5rem" //ipad mini
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
