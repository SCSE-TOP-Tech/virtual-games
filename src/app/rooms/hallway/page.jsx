"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import checkUser from "@/app/components/CheckUser";
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

export default function Hallway() {
  const router = useRouter();

  // userRef stores the user ID that has been login.
  const userRef = useRef("");

  const [room, setRoom] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const [stateId, setStateId] = useState(null);
  const [transitionId, setTransitionId] = useState(null);
  useEffect(() => {
    userRef.current = checkUser();
    console.log(`Inside hallway ${userRef.current}`);
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
    fetchID();
  }, [router]);

  const fetchID = async () => {
    try {
      const res = await fetch("/api/fetch/user", {
        method: "POST",
        body: JSON.stringify(userRef.current),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        if (data.status == 200) {
          const { transitionID, stateID } = data.body;
          setTransitionId(transitionID);
          setStateId(stateID);
        } else {
          throw new Error(data.status);
        }
      } else {
        //error
        throw new Error(res.name, res.statusText);
      }
    } catch ({ name, message }) {
      console.log(`${name} : ${message}`);
    }
  };

  const checkVisibility = async (itemName) => {
    if (availableItems && collectedItems) {
      const availState = availableItems.find(
        (item) => item.itemName === itemName
      );

      const avail = availState.stateID <= stateId;

      /**************** Need attention ****************/

      const collectedState = collectedItems.find(
        (item) => item.itemName === itemName
      );
      const collected = false;
      // const collected = collectedState.collected;

      return avail && !collected;
    }
    return false;
  };

  /**************** Need attention ****************/

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

  /**************** Need attention ****************/

  const updateCollected = async (name) => {
    const updatedItem = await updateCollectedItems(user.id, name, room.room_id);
    console.log(updatedItem);
  };

  const [isClicked, setClicked] = useState(true);

  const toggleSubmission = () => {
    setClicked(!isClicked);
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
