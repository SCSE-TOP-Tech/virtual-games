"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Inventory from "../components/Inventory";
import { CldImage, ItemImage } from "@/app/components/ImageComp";
import Navbar from "../components/Navbar";

export default function ControlRoom() {
  const [room, setRoom] = useState(false);
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetchRoom("control_room", false).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" position="relative">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            {/* background image */}
            <ItemImage item={room.background} />

            {/* items */}
            <Box position="absolute" zIndex="1">
              {/* security computer (temp viewing) */}
              <CldImage
                item={room.dummy_objects.computer}
                style={{
                  position: "relative",
                  right: "-0.1rem",
                  top: "14.1rem",
                  width: "3.3rem",
                  margin: "0",
                }}
                className={styles.item}
              />
            </Box>
          </Box>

          <Inventory items={inventory} room={room} styles={styles.item} />
        </Box>
      )}
    </Suspense>
  );
}
