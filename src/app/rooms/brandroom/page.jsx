"use client";
import styles from "./components/styles.module.css";
import { Box, Img } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";
import { fetchUser } from "@/resources/prisma/fetchUser";
import Loading from "@/app/rooms/loading";
import RoomLayout from "@/app/rooms/layout";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";
import Phone from "./components/Phone";

export default function BrandRoom() {
  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPhoneOpen, viewPhone] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching
      try {
        // Fetch user data
        const currentUser = await fetchUser();
        setUser(currentUser);

        // Fetch room data and items data
        const fetchedRoom = await fetchRoom("brand", true);
        setRoom(fetchedRoom);

        if (fetchedRoom) {
          setAvailableItems(await getAvailableItems(fetchedRoom.room_id));
          console.log("AvailableItems fetched!");
          setCollectedItems(
            await getCollectedItems(currentUser.id, fetchedRoom.room_id)
          );
          console.log("CollectedItems fetched!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching (whether successful or not)
      }
    };

    fetchData(); // Fetch data on component mount
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
      const collected = collectedState.collected;

      return avail && !collected;
    }
    return false;
  };

  const togglePhone = () => {
    // opens and closes phone display
    viewPhone(!isPhoneOpen);
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

  if (loading || !user || !room || !availableItems || !collectedItems) {
    return <Loading />;
  }


  return (
    <RoomLayout>
      <Box>
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            {/* background image */}
            {isPhoneOpen && <Phone handler={togglePhone} />}
            <ItemImage item={room.background} />
            <Box position="absolute" zIndex="1">
              {/* temp custom image to be used */}
              {/* galaxy phone */}
              {checkVisibility(room.clues.galaxy_phone.id) && (
                <Hint>
                  <ItemImage
                    onClick={() => {
                      togglePhone()
                      updateCollected(room.clues.galaxy_phone.id)
                    }}
                    width={SizeFormatter(
                        "1.3rem", //iphone se
                        "1.3rem", //iphone xr
                        "1.4rem", //iphone 12pro
                        "1.4rem", //pixel 5
                        "1.4rem", //samsung galaxy s8+
                        "1.3rem", //samsung galaxy s20 ultra
                        "1.3rem", //ipad air
                        "1.3rem" //ipad mini
                    )}
                    filter='auto'
                    brightness='100%'
                    right={SizeFormatter(
                        "2.6rem", //iphone se
                        "2.9rem", //iphone xr
                        "2.8rem", //iphone 12pro
                        "2.8rem", //pixel 5
                        "2.6rem", //samsung galaxy s8+
                        "2.9rem", //samsung galaxy s20 ultra
                        "3.3rem", //ipad air
                        "3.3rem" //ipad mini
                    )}
                    top={SizeFormatter(
                        "13.7rem", //iphone se
                        "15.2rem", //iphone xr
                        "14.3rem", //iphone 12pro
                        "14.5rem", //pixel 5
                        "13.2rem", //samsung galaxy s8+
                        "15.2rem", //samsung galaxy s20 ultra
                        "18.2rem", //ipad air
                        "18.2rem" //ipad mini
                    )}
                  />
                </Hint>
              )}
            </Box>
          </Box>
          <Box
            position="absolute"
            bottom="10%"
            mt="2%"
            w="28em"
            background={"white"}
          >
            Text Component Here
          </Box>
        </Box>
      </Box>
    </RoomLayout>
  );
}