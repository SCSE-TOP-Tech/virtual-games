"use client";

import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../../components/Navbar";
import Phone from "./components/Phone";
import { ItemImage } from "@/app/components/ImageComp";
import { fetchUser } from "@/resources/prisma/fetchUser";
import RoomLayout from "@/app/rooms/layout";
import Loading from "@/app/rooms/loading";
import getAvailableItems from "@/resources/prisma/items/getAvailableItems";
import getCollectedItems from "@/resources/prisma/items/getCollectedItems";
import endTimer from "@/resources/prisma/timer/endTimer";
import updateState from "@/resources/prisma/state/updateState";
import startTimer from "@/resources/prisma/timer/startTimer";
import updateCollectedItems from "@/resources/prisma/items/updateCollectedItems";

export default function StorageRoom() {
  const [isClicked, setClicked] = useState(false);
  const [isPhoneOpen, viewPhone] = useState(false);
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
        setRoom(fetchRoom("storage_room", false));
        if (room && user) {
          setAvailableItems(await getAvailableItems(room.room_id));
          setCollectedItems(await getCollectedItems(user.userId, room.room_id));
        }
      }
    }
    fetchData();
  }, []); // To include room if necessary (will constantly refresh)

  const changeState = async (user) => {
    if (user.stateID !== 1) {
      const endTime = await endTimer(user.id, user.stateID);
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

  const handleToggle = () => {
    //removes cloth and shows tesseract
    setClicked(true);
  };

  const togglePhone = () => {
    // opens phone display
    viewPhone(!isPhoneOpen);
  };

  return (
    <RoomLayout>
      {room ? (
        <div>
          <Box w={["100%", "30em"]} h="100%" position="relative">
            <Navbar />
            {/* background image */}
            <Box
              display="flex"
              justifyContent="center"
              zIndex="0"
              h="90%"
              width="100%"
            >
              {isPhoneOpen && <Phone handler={togglePhone} />}

              {/* background (temporary viewing) */}
              <ItemImage item={room.background} />
              <Box position="absolute" zIndex="1">
                {/* dead doctor (temp viewing) */}
                <ItemImage
                  item={room.npc.dead_doctor}
                  style={{
                    position: "relative",
                    right: "4rem",
                    top: "23rem",
                    width: "6rem",
                    margin: "0",
                  }}
                  className={styles.item}
                />

                {/* tesseract (temp viewing) */}
                <ItemImage
                  onClick={() => updateCollected(room.clues.tesseract.id)}
                  item={room.clues.tesseract}
                  style={{
                    position: "relative",
                    right: "-12.4rem",
                    top: "26rem",
                    width: "2.5rem",
                    margin: "0",
                  }}
                  className={styles.item}
                />

                {/* screwdriver (temp viewing) */}
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.screwdriver.id)
                  }
                  item={room.dummy_objects.screwdriver}
                  style={{
                    position: "relative",
                    right: "1rem",
                    top: "23rem",
                    width: "2.2rem",
                    margin: "0",
                  }}
                  className={styles.item}
                />

                {/* mop and bucket (temp viewing) */}
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.mopbucket.id)
                  }
                  item={room.dummy_objects.mopbucket}
                  style={{
                    position: "relative",
                    right: "-2.4rem",
                    top: "21rem",
                    width: "6rem",
                    margin: "0",
                  }}
                  className={styles.item}
                />

                {/* blood stained clothspin (temp viewing) */}
                <ItemImage
                  onClick={() => updateCollected(room.clues.blood_clothpin.id)}
                  item={room.clues.blood_clothpin}
                  style={{
                    position: "relative",
                    right: "5.4rem",
                    top: "14.5rem",
                    width: "2rem",
                    margin: "0",
                  }}
                  className={styles.item}
                />

                {/* doctor's galaxy phone (temp viewing) */}
                <ItemImage
                  onClick={() => {
                    togglePhone();
                    updateCollected(room.clues.doctorphone.id);
                  }}
                  item={room.clues.doctorphone}
                  style={{
                    position: "relative",
                    right: "5.4rem",
                    top: "19.5rem",
                    width: "4.2rem",
                    margin: "0",
                  }}
                  className={styles.item}
                />

                {/* cloth (temp viewing) */}
                <Box>
                  {!isClicked && (
                    <ItemImage
                      onClick={() => {
                        handleToggle();
                        updateCollected(room.clues.cloth.id);
                      }}
                      item={room.clues.cloth}
                      style={{
                        position: "relative",
                        right: "-11rem",
                        top: "9.4rem",
                        width: "5rem",
                        margin: "0",
                      }}
                      className={styles.item}
                    />
                  )}
                </Box>
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
        </div>
      ) : (
        <Loading />
      )}
    </RoomLayout>
  );
}
