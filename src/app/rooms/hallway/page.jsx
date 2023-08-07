"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useEffect, useState, useRef } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
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
import Submit from "./components/Submit";
import { useRouter } from "next/navigation";

export default function Hallway() {
  const router = useRouter();
  const user = useRef("");

  const [room, setRoom] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user.current = localStorage.getItem("userId");
    const id = localStorage.getItem("id");
    console.log("User ID: ", user.current);
    console.log("ID: ", id);

    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching
      try {
        // Fetch room data and items data
        const fetchedRoom = await fetchRoom("hallway", false);
        setRoom(fetchedRoom);

        if (fetchedRoom) {
          setAvailableItems(await getAvailableItems(fetchedRoom.room_id));
          console.log("AvailableItems fetched!");
          setCollectedItems(
            await getCollectedItems(id, fetchedRoom.room_id)
          );
          console.log("CollectedItems fetched!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching (whether successful or not)
      }
    };
    if (user.current){
      console.log("User login successful");
      fetchData(); //Fetch data on component mount
    }
    else
      router.push('/login')
  }, []);

  const checkVisibility = (itemName) => {
    if (availableItems && collectedItems) {
      const availState = availableItems.find(
        (item) => item.itemName === itemName
      );
      const avail = availState.stateID <= user.stateID;
      const collectedState = collectedItems.find(
        (item) => item.itemName === itemName
      );
      const collected = false;
      // const collected = collectedState.collected;

      return avail && !collected;
    }
    return false;
  };

  const changeState = async (user) => {
    if (user.stateID !== 1) {
      await endTimer(user.id, user.stateID);
    }
    setUser(await updateState(user.id));
    const startTime = await startTimer(user.id, user.stateID);
    if (startTime !== 200) {
      console.log("Failed to Start Timer");
    }
  };

  const updateCollected = async (name) => {
    const updatedItem = await updateCollectedItems(user.id, name, room.room_id);
    console.log(updatedItem);
  };

  const [isClicked, setClicked] = useState(true);

  const toggleSubmission = () => {
    setClicked(!isClicked);
  };

  if (loading || !user.current || !room || !availableItems || !collectedItems) {
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
          {isClicked && (
            <Submit
              clickHandler={toggleSubmission}
              toggleSubmission={() => router.push("/transitions")}
            />
          )}
          <ItemImage item={room.background} />
          <Box position="absolute" zIndex="1">
            {/* sibling-photo */}
            {checkVisibility(room.clues.portrait.id) && (
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.portrait.id)}
                  item={room.clues.portrait}
                  className={styles.item}
                  width="0.7rem"
                  filter="auto"
                  brightness="60%"
                  left={SizeFormatter(
                    "3.1rem", //iphone se
                    "3.4rem", //iphone xr
                    "3.2rem", //iphone 12pro
                    "3.2rem", //pixel 5
                    "2.93rem", //samsung galaxy s8+
                    "3.4rem", //samsung galaxy s20 ultra
                    "4.1rem", //ipad air
                    "4.1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11.5rem",
                    "12.8rem",
                    "12rem",
                    "12rem",
                    "10.9rem",
                    "12.8rem",
                    "15rem",
                    "15rem"
                  )}
                />
              </Hint>
            )}

            <img
              src="/Rooms/Hallway/princess-white.png"
              alt="submit answers"
              width="43rem"
              className={styles.item}
              style={{
                position: "relative",
                top: "13rem",
              }}
              onClick={toggleSubmission}
            />
          </Box>
        </Box>

        <Box mt="2%" w="100%" background="white">
          Text Component Here
        </Box>
      </Box>
    </RoomLayout>
  );
}
