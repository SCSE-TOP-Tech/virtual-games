"use client";
import { Box } from "@chakra-ui/react";

import Image from "next/image";
import styles from "./components/styles.module.css";

import background from "../../../public/Rooms/Clinic/clinic.png";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Inventory from "../components/Inventory";
import { ItemImage, SizeFormatter } from "../components/ImageComp";
import Navbar from "../components/Navbar";

export default function Clinic() {
  const [room, setRoom] = useState(false);
  const [inventory, setInventory] = useState([])

  // Initial Load
  useEffect(() => {
    fetchRoom("clinic", false).then((data) => {
      setRoom(data);
    });
  }, []);
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%">
          <Navbar />
          {/* background image */}
          <Box
            display="flex"
            justifyContent="center"
            zIndex="0"
            h="90%"
            width="100%"
          >
            {/* to export background to cloud  */}
            <Image src={background} alt="background" />

            <Box position="absolute" zIndex="1">
              {/* doctor */}
              <ItemImage
                item={room.npc.doctor}
                className={styles.item}
                width="20rem"
                left={SizeFormatter(
                  "5rem", //iphone se
                  "5rem", //iphone xr
                  "5rem", //iphone 12pro
                  "5rem", //pixel 5
                  "5rem", //samsung galaxy s8+
                  "5rem", //samsung galaxy s20 ultra
                  "5rem", //ipad air
                  "5rem" //ipad mini
                )}
                top={SizeFormatter(
                  "20rem", //iphone se
                  "20rem", //iphone xr
                  "20rem", //iphone 12pro
                  "20rem", //pixel 5
                  "20rem", //samsung galaxy s8+
                  "20rem", //samsung galaxy s20 ultra
                  "20rem", //ipad air
                  "20rem" //ipad mini
                )}
              />
            </Box>
          </Box>
          <Inventory items={inventory} room={room} styles={styles.item} />
        </Box>
      )}
    </Suspense>
  );
}
