"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
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
export default function CooperPage() {
  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);

  // Initial Load
  useEffect(() => {
    async function fetchData() {
      const currentUser = await fetchUser();

      if (currentUser) {
        setUser(currentUser);
        setRoom(fetchRoom("cooper", true));
        if (room && user) {
          setAvailableItems(await getAvailableItems(room.room_id));
          setCollectedItems(await getCollectedItems(user.userId, room.room_id));
        }
      }
    }
    fetchData();
  }, []); // To include room if necessary (will constantly refresh)

  const changeState = async () => {
    if (user.stateId !== 1) {
      const endTime = await endTimer(user.userId, user.stateId);
    }
    setUser(await updateState(user.userId));
    const startTime = await startTimer(user.userId, user.stateId);
    if (startTime !== 200) {
      console.log("Failed to Start Timer");
    }
  };

  const updateCollected = async (name) => {
    const updatedItem = await updateCollectedItems(
        user.userId,
        name,
        room.room_id
    );
    console.log(updatedItem);
  };

  return (
    <RoomLayout>
      {room ? (
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
                  className={styles.item}
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
                  onClick={() => updateCollected(room.dummy_objects.newspaper.id)}
                  item={room.dummy_objects.newspaper}
                  //chakra props
                  className={styles.item}
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
                  onClick={() => updateCollected(room.dummy_objects.spaceID_card.id)}
                  item={room.dummy_objects.spaceID_card}
                  //chakra props
                  filter="auto"
                  brightness="75%"
                  className={styles.item}
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
                  onClick={() => updateCollected(room.dummy_objects.coffee_machine.id)}
                  item={room.dummy_objects.coffee_machine}
                  //chakra props
                  className={styles.item}
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
      ) : (
        <Loading />
      )}
    </RoomLayout>
  );
}
