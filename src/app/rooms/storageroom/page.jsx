"use client";

import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../../components/Navbar";
import Phone from "./components/Phone";
<<<<<<< HEAD:src/app/storageroom/page.jsx
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import Hint from "../components/Hint";
=======
import { ItemImage } from "@/app/components/ImageComp";
import { fetchUser } from "@/resources/prisma/fetchUser";
import RoomLayout from "@/app/rooms/layout";
import Loading from "@/app/rooms/loading";
>>>>>>> a5141944c04d481eeb57ccbf70789fbcea96e223:src/app/rooms/storageroom/page.jsx

export default function StorageRoom() {
  const [room, setRoom] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isPhoneOpen, viewPhone] = useState(false);
  const [user, setUser] = useState();

  // Initial Load
  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      if (user) {
        setUser(user);
        setRoom(fetchRoom("storage_room", false));
      }
    }
    fetchData();
  }, []);

  const handleToggle = () => {
    //removes cloth and shows tesseract
    setClicked(true);
  };

  const togglePhone = () => {
    // opens phone display
    viewPhone(!isPhoneOpen);
  };

  return (
<<<<<<< HEAD:src/app/storageroom/page.jsx
    // To add loading page
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Navbar />
          {/* background image */}
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            {isPhoneOpen && <Phone handler={togglePhone} />}
=======
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
>>>>>>> a5141944c04d481eeb57ccbf70789fbcea96e223:src/app/rooms/storageroom/page.jsx

            {/* background (temporary viewing) */}
            <ItemImage item={room.background} />
            <Box position="absolute" zIndex="1">
              {/* dead doctor (temp viewing) */}
              <Hint>
                <ItemImage
                  item={room.npc.dead_doctor}
                  className={styles.item}
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
                    "10rem", //iphone xr
                    "10rem", //iphone 12pro
                    "10rem", //pixel 5
                    "10rem", //samsung galaxy s8+
                    "10rem", //samsung galaxy s20 ultra
                    "10rem", //ipad air
                    "10rem" //ipad mini
                  )}
                />
              </Hint>

              {/* tesseract (temp viewing) */}
              <Hint>
                <ItemImage
                  item={room.clues.tesseract}
                  className={styles.item}
                  width="2.2rem"
                  left={SizeFormatter(
                    "10rem", //iphone se
                    "10rem", //iphone xr
                    "10rem", //iphone 12pro
                    "10rem", //pixel 5
                    "10rem", //samsung galaxy s8+
                    "10rem", //samsung galaxy s20 ultra
                    "10rem", //ipad air
                    "10rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11.85rem", //iphone se
                    "11.85", //iphone xr
                    "11.85rem", //iphone 12pro
                    "11.85rem", //pixel 5
                    "11.85rem", //samsung galaxy s8+
                    "11.85rem", //samsung galaxy s20 ultra
                    "11.85rem", //ipad air
                    "11.85rem" //ipad mini
                  )}
                />
              </Hint>

              {/* screwdriver (temp viewing) */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.screwdriver}
                  className={styles.item}
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
                    "14.3rem", //iphone xr
                    "14.3rem", //iphone 12pro
                    "14.3rem", //pixel 5
                    "14.3rem", //samsung galaxy s8+
                    "14.3rem", //samsung galaxy s20 ultra
                    "14.3rem", //ipad air
                    "14.3rem" //ipad mini
                  )}
                />
              </Hint>

              {/* mop and bucket (temp viewing) */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.mopbucket}
                  className={styles.item}
                  filter="auto"
                  brightness="55%"
                  width="4rem"
                  left={SizeFormatter(
                    "3.5rem", //iphone se
                    "3.5rem", //iphone xr
                    "3.5rem", //iphone 12pro
                    "3.5rem", //pixel 5
                    "3.5rem", //samsung galaxy s8+
                    "3.5rem", //samsung galaxy s20 ultra
                    "3.5rem", //ipad air
                    "3.5rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "7.3rem", //iphone se
                    "7.3rem", //iphone xr
                    "7.3rem", //iphone 12pro
                    "7.3rem", //pixel 5
                    "7.3rem", //samsung galaxy s8+
                    "7.3rem", //samsung galaxy s20 ultra
                    "7.3rem", //ipad air
                    "7.3rem" //ipad mini
                  )}
                />
              </Hint>

              {/* blood stained clothspin (temp viewing) */}
              <Hint>
                <ItemImage
                  item={room.clues.blood_clothpin}
                  className={styles.item}
                  filter="auto"
                  brightness="45%"
                  width="1rem"
                  right={SizeFormatter(
                    "6rem", //iphone se
                    "6rem", //iphone xr
                    "6rem", //iphone 12pro
                    "6rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "6rem", //samsung galaxy s20 ultra
                    "6rem", //ipad air
                    "6rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "4.1rem", //iphone se
                    "4.1rem", //iphone xr
                    "4.1rem", //iphone 12pro
                    "4.1rem", //pixel 5
                    "4.1rem", //samsung galaxy s8+
                    "4.1rem", //samsung galaxy s20 ultra
                    "4.1rem", //ipad air
                    "4.1rem" //ipad mini
                  )}
                />
              </Hint>

              {/* doctor's galaxy phone (temp viewing) */}
              <Hint>
                <ItemImage
                  item={room.clues.doctorphone}
                  className={styles.item}
                  filter="auto"
                  brightness="75%"
                  width="1.7rem"
                  right={SizeFormatter(
                    "3.3rem", //iphone se
                    "3.3rem", //iphone xr
                    "3.3rem", //iphone 12pro
                    "3.3rem", //pixel 5
                    "3.3rem", //samsung galaxy s8+
                    "3.3rem", //samsung galaxy s20 ultra
                    "3.3rem", //ipad air
                    "3.3rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "7.2rem", //iphone se
                    "7.2rem", //iphone xr
                    "7.2rem", //iphone 12pro
                    "7.2rem", //pixel 5
                    "7.2rem", //samsung galaxy s8+
                    "7.2rem", //samsung galaxy s20 ultra
                    "7.2rem", //ipad air
                    "7.2rem" //ipad mini
                  )}
                  onClick={togglePhone}
                />
              </Hint>

              {/* cloth (temp viewing) */}
              <Box>
                {!isClicked && (
                  <Hint>
                    <ItemImage
                      item={room.clues.cloth}
                      className={styles.item}
                      filter="auto"
                      brightness="75%"
                      width="3.2rem"
                      left={SizeFormatter(
                        "9.4rem", //iphone se
                        "9.4rem", //iphone xr
                        "9.4rem", //iphone 12pro
                        "9.4rem", //pixel 5
                        "9.4rem", //samsung galaxy s8+
                        "9.4rem", //samsung galaxy s20 ultra
                        "9.4rem", //ipad air
                        "9.4rem" //ipad mini
                      )}
                      top={SizeFormatter(
                        "1.5rem", //iphone se
                        "1.5rem", //iphone xr
                        "1.5rem", //iphone 12pro
                        "1.5rem", //pixel 5
                        "1.5rem", //samsung galaxy s8+
                        "1.5rem", //samsung galaxy s20 ultra
                        "1.5rem", //ipad air
                        "1.5rem" //ipad mini
                      )}
                      onClick={handleToggle}
                    />
                  </Hint>
                )}
              </Box>
            </Box>
          </Box>
<<<<<<< HEAD:src/app/storageroom/page.jsx

          <Box mt="2%" w="100%" background={"white"}>
            Text Component Here
          </Box>
        </Box>
=======
        </div>
      ) : (
        <Loading />
>>>>>>> a5141944c04d481eeb57ccbf70789fbcea96e223:src/app/rooms/storageroom/page.jsx
      )}
    </RoomLayout>
  );
}
