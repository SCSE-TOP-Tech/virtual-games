"use client";

import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../components/Navbar";
import Phone from "./components/Phone";
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import Hint from "../components/Hint";

export default function StorageRoom() {
  const [room, setRoom] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isPhoneOpen, viewPhone] = useState(false);

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
    fetchRoom("storage_room", false).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    // To add loading page
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Navbar />
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

              {/* tesseract (temp viewing) */}
              <ItemImage
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
                item={room.clues.doctorphone}
                style={{
                  position: "relative",
                  right: "5.4rem",
                  top: "19.5rem",
                  width: "4.2rem",
                  margin: "0",
                }}
                className={styles.item}
                onClick={togglePhone}
              />

              {/* cloth (temp viewing) */}
              <Box>
                {!isClicked && (
                  <ItemImage
                    item={room.clues.cloth}
                    style={{
                      position: "relative",
                      right: "-11rem",
                      top: "9.4rem",
                      width: "5rem",
                      margin: "0",
                    }}
                    className={styles.item}
                    onClick={handleToggle}
                  />
                )}
              </Box>
            </Box>
          </Box>

          <Box mt="2%" w="100%" background={"white"}>
            Text Component Here
          </Box>
        </Box>
      )}
    </Suspense>
  );
}
