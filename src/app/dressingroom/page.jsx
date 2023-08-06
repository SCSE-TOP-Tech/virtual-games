"use client";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Inventory from "../components/Inventory";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ItemImage, SizeFormatter } from "../components/ImageComp";
import Hint from "../components/Hint";

export default function DressingRoom() {
  const [room, setRoom] = useState(false);
  const [inventory, setInventory] = useState([])

  // Initial Load
  useEffect(() => {
    fetchRoom("dressing_room", false).then((data) => {
      setRoom(data);
    });
  }, []);

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
              {/* lipstick*/}
              <Hint>
                <ItemImage
                  item={room.clues.lipstick}
                  onClick={() => setInventory((prev) => [...prev, "lipstick"])}

                  className={styles.item}
                  width="1rem"
                  filter="auto"
                  brightness="20%"
                  right={SizeFormatter(
                    "-8.3em", //iphone se
                    "-9.3rem", //iphone xr
                    "-9rem", //iphone 12pro
                    "-9.3em", //pixel 5
                    "-8.4rem", //samsung galaxy s8+
                    "-9.3rem", //samsung galaxy s20 ultra
                    "-11.2em", //ipad air
                    "-11.2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "17rem",
                    "19rem",
                    "18rem",
                    "18.4rem",
                    "16.55rem",
                    "18.9rem",
                    "22.5rem",
                    "22.5rem"
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
