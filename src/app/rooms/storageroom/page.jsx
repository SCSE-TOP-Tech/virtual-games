"use client";

import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../../components/Navbar";
import Phone from "./components/Phone";
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import { fetchUser } from "@/resources/prisma/fetchUser";
import RoomLayout from "@/app/rooms/layout";
import Loading from "@/app/rooms/loading";
import Hint from "../../components/Hint";

export default function StorageRoom() {
  const [room, setRoom] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isPhoneOpen, viewPhone] = useState(false);
  const [user, setUser] = useState();

  const handleToggle = () => {
    //removes cloth and shows tesseract
    setClicked(true);
  };

  const togglePhone = () => {
    // opens phone display
    viewPhone(!isPhoneOpen);
  };

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

  return (
    // To add loading page
    <RoomLayout>
      {room ? (
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
                    item={room.clues.tesseract}
                    className={styles.item}
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
                    item={room.dummy_objects.mopbucket}
                    className={styles.item}
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
                    item={room.clues.blood_clothpin}
                    className={styles.item}
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
                <Hint>
                  <ItemImage
                    item={room.clues.doctorphone}
                    className={styles.item}
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
                        onClick={handleToggle}
                      />
                    </Hint>
                  )}
                </Box>
              </Box>
            </Box>

            <Box mt="2%" w="100%" background={"white"}>
              Text Component Here
            </Box>
          </Box>
          ) : (
          <Loading />
      )}
        </RoomLayout>
      );
}
