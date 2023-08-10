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
import Phone from "./components/Phone";
import Inventory from "@/app/components/Inventory";

export default function StorageRoom() {
  const router = useRouter();
  const fetchRef = useRef(false);
  // userRef stores the user ID that has been login.
  const userRef = useRef("");

  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [availableItems, setAvailableItems] = useState(null);
  const [collectedItems, setCollectedItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isClicked, setClicked] = useState(false);
  const [isPhoneOpen, viewPhone] = useState(false);

  useEffect(() => {
    userRef.current = checkUser();
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching
      try {
        if(!fetchRef.current){
          // Fetch room data and items data
          fetchRef.current = true;
          const fetchedRoom = await fetchRoom("storage_room", false);

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

  const handleToggle = () => {
    //removes cloth and shows tesseract
    setClicked(true);
  };

  const togglePhone = () => {
    // opens phone display
    viewPhone(!isPhoneOpen);
  };

  const closePhone = async () => {
    togglePhone();
    router.push("/transitions");
    await updateCollected(room.clues.doctorphone.id);
    await changeState(user);
  };

  return (
    // To add loading page
    <RoomLayout>
      <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
        <Navbar Phone={true}/>
        {/* background image */}
        <Box
          display="flex"
          justifyContent="center"
          position="relative"
          width="100%"
        >
          {isPhoneOpen && <Phone handler={closePhone} />}

          {/* background (temporary viewing) */}
          <ItemImage item={room.background} />
          <Box position="absolute" zIndex="1">
            {/* dead doctor (temp viewing) */}
            <Hint>
              <ItemImage
                onClick={async () => {
                  router.push("/transitions");
                  await updateCollected(room.npc.dead_doctor.id);
                  await changeState(user);
                }}
                item={room.npc.dead_doctor}
                className={checkVisibility(room.npc.dead_doctor.id) ? `${styles.item}` : `${styles.hidden}`}
                filter="auto"
                brightness="75%"
                width="3.7rem"
                right={SizeFormatter(
                  "1.5rem", //iphone se
                  "1.5rem", //iphone xr
                  "1.5rem", //iphone 12pro
                  "1.5rem", //pixel 5
                  "1.5rem", //samsung galaxy s8+
                  "1.5rem", //samsung galaxy s20 ultra
                  "1.5rem", //ipad air
                  "1.5rem" //ipad mini
                )}
                top={SizeFormatter(
                  "10rem", //iphone se
                  "12rem", //iphone xr
                  "11rem", //iphone 12pro
                  "11rem", //pixel 5
                  "10rem", //samsung galaxy s8+
                  "14rem", //samsung galaxy s20 ultra
                  "14rem", //ipad air
                  "14rem" //ipad mini
                )}
              />
            </Hint> 
  
            {/* tesseract (temp viewing) */}
              <Hint>
                <ItemImage
                onClick={() => updateCollected(room.clues.tesseract.id)}
                item={room.clues.tesseract}
                className={checkVisibility(room.clues.tesseract.id) ? `${styles.item}` : `${styles.hidden}`}
                width="2.2rem"
                left={SizeFormatter(
                  "10rem", //iphone se
                  "10rem", //iphone xr
                  "10rem", //iphone 12pro
                  "10rem", //pixel 5
                  "9rem", //samsung galaxy s8+
                  "10rem", //samsung galaxy s20 ultra
                  "11rem", //ipad air
                  "11rem" //ipad mini
                )}
                top={SizeFormatter(
                  "11.85rem", //iphone se
                  "13.85rem", //iphone xr
                  "12.75rem", //iphone 12pro
                  "12.85rem", //pixel 5
                  "11.35rem", //samsung galaxy s8+
                  "13.85rem", //samsung galaxy s20 ultra
                  "17.55rem", //ipad air
                  "17.55rem" //ipad mini
                )}
              />
              </Hint>

            {/* screwdriver (temp viewing) */}
              <Hint>
                <ItemImage
                  onClick={() =>
                    updateCollected(room.dummy_objects.screwdriver.id)
                  }
                  item={room.dummy_objects.screwdriver}
                  className={checkVisibility(room.dummy_objects.screwdriver.id) ? `${styles.item}` : `${styles.hidden}`}
                  filter="auto"
                  brightness="55%"
                  width="1rem"
                  left={SizeFormatter(
                    "4.5rem", //iphone se
                    "4.5rem", //iphone xr
                    "4.5rem", //iphone 12pro
                    "4.5rem", //pixel 5
                    "4.5rem", //samsung galaxy s8+
                    "4.5rem", //samsung galaxy s20 ultra
                    "4.5rem", //ipad air
                    "4.5rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "14.3rem", //iphone se
                    "16.9rem", //iphone xr
                    "15.3rem", //iphone 12pro
                    "15.7rem", //pixel 5
                    "13.5rem", //samsung galaxy s8+
                    "16.8rem", //samsung galaxy s20 ultra
                    "21rem", //ipad air
                    "21rem" //ipad mini
                  )}
                />
              </Hint>

            {/* mop and bucket (temp viewing) */}
              <Hint>
                <ItemImage
                onClick={() => updateCollected(room.dummy_objects.mopbucket.id)}
                item={room.dummy_objects.mopbucket}
                className={checkVisibility(room.dummy_objects_mopbucket.id) ? `${styles.item}` : `${styles.hidden}`}
                filter="auto"
                brightness="55%"
                width={SizeFormatter(
                  "4rem", //iphone se
                  "4rem", //iphone xr
                  "4rem", //iphone 12pro
                  "4rem", //pixel 5
                  "4rem", //samsung galaxy s8+
                  "4rem", //samsung galaxy s20 ultra
                  "4.5rem", //ipad air
                  "4.5rem" //ipad mini
                )}
                left={SizeFormatter(
                  "3.5rem", //iphone se
                  "3.5rem", //iphone xr
                  "3.5rem", //iphone 12pro
                  "3.5rem", //pixel 5
                  "2.7rem", //samsung galaxy s8+
                  "3.5rem", //samsung galaxy s20 ultra
                  "3.5rem", //ipad air
                  "3.5rem" //ipad mini
                )}
                top={SizeFormatter(
                  "7.3rem", //iphone se
                  "9.3rem", //iphone xr
                  "8.3rem", //iphone 12pro
                  "8.3rem", //pixel 5
                  "7.3rem", //samsung galaxy s8+
                  "9.3rem", //samsung galaxy s20 ultra
                  "12.8rem", //ipad air
                  "12.8rem" //ipad mini
                )}
              />
            </Hint>

            {/* blood stained clothspin (temp viewing) */}
              <Hint>
                <ItemImage
                  onClick={() => updateCollected(room.clues.blood_clothpin.id)}
                  item={room.clues.blood_clothpin}
                  className={checkVisibility(room.clues.blood_clothpin.id) ? `${styles.item}` : `${styles.hidden}`}
                  filter="auto"
                  brightness="45%"
                  width="1rem"
                  right={SizeFormatter(
                    "6rem", //iphone se
                    "7rem", //iphone xr
                    "6rem", //iphone 12pro
                    "6.2rem", //pixel 5
                    "5.5rem", //samsung galaxy s8+
                    "6.8rem", //samsung galaxy s20 ultra
                    "8.3rem", //ipad air
                    "8.3rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "4.1rem", //iphone se
                    "6.1rem", //iphone xr
                    "5.1rem", //iphone 12pro
                    "5.1rem", //pixel 5
                    "3.6rem", //samsung galaxy s8+
                    "5.8rem", //samsung galaxy s20 ultra
                    "8.4rem", //ipad air
                    "8.4rem" //ipad mini
                  )}
                />
              </Hint>

            {/* doctor's galaxy phone (temp viewing) */}
              <ItemImage
                onClick={togglePhone}
                item={room.clues.doctorphone}
                className={checkVisibility(room.clues.doctorphone.id) ? `${styles.item}` : `${styles.hidden}`}
                filter="auto"
                brightness="75%"
                width="1.7rem"
                right={SizeFormatter(
                  "3.3rem", //iphone se
                  "4.0rem", //iphone xr
                  "3.3rem", //iphone 12pro
                  "3.5rem", //pixel 5
                  "3.3rem", //samsung galaxy s8+
                  "3.8rem", //samsung galaxy s20 ultra
                  "3.9rem", //ipad air
                  "3.9rem" //ipad mini
                )}
                top={SizeFormatter(
                  "7.2rem", //iphone se
                  "9.2rem", //iphone xr
                  "8.2rem", //iphone 12pro
                  "8.4rem", //pixel 5
                  "6.2rem", //samsung galaxy s8+
                  "9.2rem", //samsung galaxy s20 ultra
                  "13.2rem", //ipad air
                  "13.2rem" //ipad mini
                )}
              />

            {/* cloth (temp viewing) */}
            <Box>
              {!isClicked &&
                <ItemImage
                  onClick={() => {
                    handleToggle();
                    updateCollected(room.clues.cloth.id);
                  }}
                  item={room.clues.cloth}
                  className={checkVisibility(room.clues.cloth.id) ? `${styles.item}` : `${styles.hidden}`}
                  filter="auto"
                  brightness="75%"
                  width="3.2rem"
                  left={SizeFormatter(
                    "9.4rem", //iphone se
                    "9.4rem", //iphone xr
                    "9.4rem", //iphone 12pro
                    "9.4rem", //pixel 5
                    "8.6rem", //samsung galaxy s8+
                    "9.4rem", //samsung galaxy s20 ultra
                    "10.4rem", //ipad air
                    "10.4rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "1.5rem", //iphone se
                    "3.5rem", //iphone xr
                    "2.5rem", //iphone 12pro
                    "2.5rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "3.5rem", //samsung galaxy s20 ultra
                    "6.5rem", //ipad air
                    "6.5rem" //ipad mini
                  )}
                />
              }
            </Box>
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
