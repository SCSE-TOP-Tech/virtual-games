"use client";
import styles from "./components/styles.module.css";
import Navbar from "../components/Navbar";
import { Container, Text, Box } from "@chakra-ui/react";
import Inventory from "../components/Inventory";
import { CldImage, ItemImage, SizeFormatter } from "../components/ImageComp";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from '@/resources/cloudinary/fetchRoom'
import Hint from "../components/Hint";
import createUser from '@/resources/prisma/createUser'
import updateTimer from '@/resources/prisma/updateTimer'
import updateScore from '@/resources/prisma/updateScore'

export default function MaanRoom() {
  const [room, setRoom] = useState(false);
  const [inventory, setInventory] = useState([])

  // Initial Load
  useEffect(() => {
    fetchRoom("maan", true).then((data) => {
      setRoom(data);
    });
  }, []);

  const submitHandler = async(e) => {
    e.preventDefault();
    updateScore({
      id: "e863d473-7130-4cfc-a97e-ec79e9216da8",
      timerScore: 10,
      hintScore: 2,
      culpritScore: 5
    })
  }

  const csubmitHandler = async(e) => {
    e.preventDefault();
    createUser({
      email: "3",
      password: "2",
      name: "agene"
    })
  }

  return (
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

            <ItemImage item={room.background} />
            <Box position="absolute" zIndex="1">
              {/* spacesword  */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.spacesword}
                  onClick={() => setInventory((prev) => [...prev, "spacesword"])}

                  className={styles.item}
                  width="2.7rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "0rem", //iphone xr
                    "0rem", //iphone 12pro
                    "0em", //pixel 5
                    "0rem", //samsung galaxy s8+
                    "0rem", //samsung galaxy s20 ultra
                    "0em", //ipad air
                    "0rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11rem",
                    "12.5rem",
                    "11.7rem",
                    "11.7rem",
                    "10.4rem",
                    "12.4rem",
                    "15rem",
                    "15.2rem"
                  )}
                />
              </Hint>
            </Box>
          </Box>
          <Inventory items={inventory} room={room} styles={styles.item} />
        </Box>
      )}
    </Suspense>
  );
}
