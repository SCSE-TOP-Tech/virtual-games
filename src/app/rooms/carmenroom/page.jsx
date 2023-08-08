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

export default function CarmenRoom() {
  const router = useRouter();

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
        // Fetch room data and items data
        const fetchedRoom = await fetchRoom("carmen", true);
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

  const checkVisibility = async (itemName) => {
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
  };

  if (loading || !user || !room || !availableItems || !collectedItems) {
    return <Loading />;
  }

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
          {/* background image */}
          <ItemImage item={room.background} />
          {/* items */}
          <Box position="absolute" zIndex="1">
            {/* mail */}
            {checkVisibility(room.clues.mail.id) && (
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.mail.id)}
                  item={room.clues.mail}
                  className={styles.item}
                  width="5.9rem"
                  filter="auto"
                  brightness="76%"
                  right={SizeFormatter(
                    "8rem", //iphone se
                    "9rem", //iphone xr
                    "8.3rem", //iphone 12pro
                    "8.3rem", //pixel 5
                    "7.8rem", //samsung galaxy s8+
                    "8.7rem", //samsung galaxy s20 ultra
                    "10.2rem", //ipad air
                    "10.2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "8.8rem",
                    "10.3rem",
                    "9.3rem",
                    "9.6rem",
                    "8.3rem",
                    "10.2rem",
                    "12.7rem",
                    "12.7rem"
                  )}
                />
              </Hint>
            )}

            {/* master key */}
            {checkVisibility(room.clues.master_key.id) && (
              <Hint>
                <ItemImage
                  onClick={async () => {
                    router.push("/transitions");
                    await updateCollected(room.clues.master_key.id);
                    await changeState(user);
                  }}
                  item={room.clues.master_key}
                  className={styles.item}
                  width="2rem"
                  filter="auto"
                  brightness="76%"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1.3rem", //samsung galaxy s20 ultra
                    "1.3rem", //ipad air
                    "1.4rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "13rem",
                    "15.7rem",
                    "14rem",
                    "14.4rem",
                    "12.3rem",
                    "15.5rem",
                    "19.5rem",
                    "19.5rem"
                  )}
                />
              </Hint>
            )}

            {/* clothspin */}
            {checkVisibility(room.dummy_objects.clothespin.id) && (
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.clothespin.id)
                  }
                  item={room.dummy_objects.clothespin}
                  className={styles.item}
                  width="1.5rem"
                  filter="auto"
                  brightness="20%"
                  left={SizeFormatter(
                    "11rem", //iphone se
                    "12.2rem", //iphone xr
                    "12rem", //iphone 12pro
                    "12rem", //pixel 5
                    "11rem", //samsung galaxy s8+
                    "12rem", //samsung galaxy s20 ultra
                    "14rem", //ipad air
                    "14rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12.7rem",
                    "15rem",
                    "13.6rem",
                    "14rem",
                    "11.8rem",
                    "15rem",
                    "19rem",
                    "19rem"
                  )}
                />
              </Hint>
            )}
          </Box>
        </Box>
        <Box mt="2%" w="100%" background={"white"}>
          Text Component Here
        </Box>
      </Box>
    </RoomLayout>
  );
}
